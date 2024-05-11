import React, { useCallback, useEffect, useMemo, useState } from "react";
import s from "./PostEditor.module.scss";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { createEditor, Editor } from "slate";
import { withHistory } from "slate-history";
import MediaBar from "./ui/MediaBar/MediaBar";
import { usePostContext } from "../../context/post-editor/PostEditorContext";
import Whiteboard from "./ui/Whiteboard/Whiteboard";
import Drawing from "./ui/Uploaded/Drawing/Drawing";
import useInitialData from "./hooks/useInitialData";
import PhotosUpload from "./ui/Uploaded/Photo/Photo";
import PhotoPreview from "./ui/Uploaded/Photo/PhotoPreview";
import DragAndDropArea from "./ui/Uploaded/Photo/DragAndDropArea";
import FilesPreview from "./ui/Uploaded/Files/FilesPreview";
import { getCharCount } from "./utils/getCharCount";
import { Element } from "./ui/Slate/Element";
import { Leaf } from "./ui/Slate/Leaf";
import { Toolbar } from "./ui/Toolbar/Toolbar";
import MarkButton from "./ui/Toolbar/MarkButton/MarkButton";
import Footer from "./ui/Footer/Footer";

const MAX_LENGTH = 1500;

const withLayout = (editor: Editor) => {
  const { normalizeNode } = editor;
  return editor;
};

export const PostEditor = () => {
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const editor = useMemo(
    () => withLayout(withHistory(withReact(createEditor()))),
    []
  );
  const { initialData } = useInitialData();

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const [characters, setCharacters] = useState(0);
  const { postEditorState, setPostEditorValue, postEditorValue } =
    usePostContext();

  useEffect(() => {
    if (postEditorValue) {
      setCharacters(getCharCount(postEditorValue));
    }
  }, [postEditorValue]);

  const slateValue = useMemo(() => {
    if (!editor || !Editor) return [];
    editor.children = postEditorValue;
    Editor?.normalize(editor, { force: true });
    return editor.children;
  }, [editor, initialData, postEditorValue]);

  return (
    <div className={s.container}>
      {postEditorState === "initial" && (
        <Slate
          editor={editor}
          initialValue={slateValue}
          onChange={(value) => {
            console.log(value, "value");
            setPostEditorValue(value);
          }}
        >
          <Toolbar>
            <MarkButton format="bold" />
            <MarkButton format="italic" />
            <MarkButton format="underline" />
          </Toolbar>

          <Editable
            style={{ outline: "none", zIndex: 10 }}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            className={s.area}
            autoFocus
            onKeyDown={(event) => {
              if (
                getCharCount(postEditorValue) >= MAX_LENGTH &&
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
            value={postEditorValue}
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
