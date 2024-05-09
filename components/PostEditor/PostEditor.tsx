// @ts-nocheck
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import s from "./PostEditor.module.scss";
import { Slate, Editable, withReact } from "slate-react";
import {
  createEditor,
  Element as SlateElement,
  Descendant,
  Editor,
} from "slate";
import { withHistory } from "slate-history";
import { ParagraphElement, TitleElement } from "./custom-types";
import { Toolbar } from "./Toolbar/Toolbar";
import MarkButton from "./Toolbar/MarkButton/MarkButton";
import { Value } from "slate";
import { Button } from "../UI/Button/Button";
import MediaBar from "./MediaBar/MediaBar";
import { usePostContext } from "../../context/post-editor/PostEditorContext";
import Whiteboard from "./Whiteboard/Whiteboard";
import Drawing from "./Uploaded/Drawing/Drawing";
import CategorySelect from "./CategorySelect/CategorySelect";
import classNames from "classnames";
import { Element } from "./Slate/Element";
import { Leaf } from "./Slate/Leaf";
import Footer from "./Footer/Footer";
import useInitialData from "./useInitialData";

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

  const { postEditorState } = usePostContext();

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

  return (
    <div className={s.container}>
      {postEditorState === "initial" && (
        <Slate
          editor={editor}
          value={slateValue} // now normalized
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
            style={{ outline: "none" }}
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

          <Footer
            characters={characters}
            maxLength={MAX_LENGTH}
            value={value}
          />
          <MediaBar />
        </Slate>
      )}
      {postEditorState === "whiteboard" && <Whiteboard />}
    </div>
  );
};
