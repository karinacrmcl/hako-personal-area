// @ts-nocheck
import React, { useCallback, useEffect, useMemo, useState } from "react";
import s from "./PostEditor.module.scss";
import { Slate, Editable, withReact } from "slate-react";
import {
  createEditor,
  Element as SlateElement,
  Descendant,
  Editor,
} from "slate";
import { withHistory } from "slate-history";
import { Toolbar } from "./Toolbar/Toolbar";
import MarkButton from "./Toolbar/MarkButton/MarkButton";
import MediaBar from "./MediaBar/MediaBar";
import { usePostContext } from "../../context/post-editor/PostEditorContext";
import Whiteboard from "./Whiteboard/Whiteboard";
import Drawing from "./Uploaded/Drawing/Drawing";
import { Element } from "./Slate/Element";
import { Leaf } from "./Slate/Leaf";
import Footer from "./Footer/Footer";
import useInitialData from "./useInitialData";
import { addUserPost } from "../../api/user";
import { useUser } from "../../context/user/UserContext";
import PhotosUpload from "./Uploaded/Photo/Photo";
import PhotoPreview from "./Uploaded/Photo/PhotoPreview";
import DragAndDropArea from "./Uploaded/Photo/DragAndDropArea";
import FilesPreview from "./Uploaded/Files/FilesPreview";
import { uploadImageToFirestoreStorage } from "../../api/storage";

const MAX_LENGTH = 1500;

const withLayout = (editor) => {
  const { normalizeNode } = editor;
  return editor;
};

export const PostEditor = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(
    () => withLayout(withHistory(withReact(createEditor()))),
    []
  );
  const { initialData } = useInitialData();

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const [value, setValue] = useState(initialData);

  const [characters, setCharacters] = useState(0);
  const { user } = useUser();

  const { postEditorState, drawing, postCategory, photos } = usePostContext();

  const getCharCount = (arr: Record<string, string>[]) => {
    return arr?.reduce((total, obj) => {
      return (
        total +
        (obj?.children
          ? obj?.children?.reduce((acc, child) => {
              return acc + (child.text ? child.text.length : 0);
            }, 0)
          : 0)
      );
    }, 0);
  };

  useEffect(() => {
    if (value) {
      setCharacters(getCharCount(value));
    }
  }, [value]);

  const slateValue = useMemo(() => {
    editor.children = initialData;
    Editor.normalize(editor, { force: true });
    return editor.children;
  }, [editor, initialData]);

  const handlePost = async () => {
    // Upload each photo and get their download URLs
    const uploadedPhotoURLs = await Promise.all(
      photos.map(async (photo) => {
        const fileName = `${Date.now()}_${Math.random()
          .toString(36)
          .substring(2)}`;
        try {
          const downloadURL = await uploadImageToFirestoreStorage(
            photo.file,
            `photos/${fileName}`
          );
          console.log(downloadURL, "downloadurl");
          return downloadURL;
        } catch (error) {
          console.error("Error uploading photo:", error);
          return null;
        }
      })
    );

    // Add the download URLs to the postObject
    const photosArr = uploadedPhotoURLs.filter((url) => url !== null);

    // Assuming value, drawing, user, and postCategory are defined elsewhere
    const postObject = {
      userID: user?.userID || "",
      content: JSON.stringify(value),
      drawing: drawing
        ? {
            rawData: JSON.stringify(drawing?.data),
            svg: drawing?.svg?.outerHTML,
          }
        : {},
      photos: photosArr,
      postCategory,
    };
    // Add the postObject to Firestore
    await addUserPost(postObject);
  };

  return (
    <div className={s.container}>
      {postEditorState === "initial" && (
        <Slate
          editor={editor}
          value={slateValue}
          initialValue={slateValue}
          onChange={(value) => {
            setValue(value);
          }}
        >
          <Toolbar>
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
          </Toolbar>

          <Editable
            style={{ outline: "none", zIndex: 10 }}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            className={s.area}
            autoFocus
            onKeyDown={(event) => {
              if (
                getCharCount(value) >= MAX_LENGTH &&
                event?.key !== "Backspace"
              ) {
                event?.preventDefault();
                return false;
              }
            }}
          />
          <Drawing />
          <PhotoPreview />
          <FilesPreview />

          <Footer
            characters={characters}
            maxLength={MAX_LENGTH}
            value={value}
            handlePost={handlePost}
          />
          <MediaBar />
          <DragAndDropArea />
        </Slate>
      )}
      {postEditorState === "whiteboard" && <Whiteboard />}
      {postEditorState === "photos" && <PhotosUpload />}
    </div>
  );
};
