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
import { createEditor, Element as SlateElement, Descendant } from "slate";
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

const MAX_LENGTH = 1500;

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

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
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const [value, setValue] = useState(initialValue);
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

  return (
    <div className={s.container}>
      {postEditorState === "initial" && (
        <Slate
          editor={editor}
          initialValue={initialValue}
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

          <div className={s.footer}>
            <CategorySelect />
            <div className={s.footer_data}>
              <p
                className={classNames(s.limit, {
                  [s.limit_reached]: getCharCount(value) >= MAX_LENGTH,
                })}
              >
                {characters} / {MAX_LENGTH}
              </p>
              <div className={s.footer_buttons}>
                <Button
                  onClick={() => console.log(value)}
                  type="unfilled"
                  className={s.button_secondary}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => console.log(value)}
                  type="filled"
                  className={s.button}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
          <MediaBar />
        </Slate>
      )}
      {postEditorState === "whiteboard" && <Whiteboard />}
    </div>
  );
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <p style={{ ...style, fontSize: 24, fontWeight: 700 }} {...attributes}>
          {children}
        </p>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const initialValue: Descendant[] = [
  {
    type: "heading-one",
    children: [{ text: "Name your article..." }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "What would you like to post?",
      },
    ],
  },
];
