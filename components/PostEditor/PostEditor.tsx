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
  Transforms,
  createEditor,
  Node,
  Element as SlateElement,
  Descendant,
  Editor,
} from "slate";
import { withHistory } from "slate-history";
import { ParagraphElement, TitleElement } from "./custom-types";
import { Toolbar } from "./Toolbar/Toolbar";
import MarkButton from "./MarkButton/MarkButton";
import { Value } from "slate";
import { Button } from "../UI/Button/Button";
import MediaBar from "./MediaBar/MediaBar";
import { usePostContext } from "../../context/post-editor/PostEditorContext";
import Whiteboard from "./Whiteboard/Whiteboard";
import Drawing from "./Drawing/Drawing";

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

  /*   editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length <= 1 && Editor.string(editor, [0, 0]) === "") {
        const title: TitleElement = {
          type: "title",
          children: [{ text: "Untitled" }],
        };
        Transforms.insertNodes(editor, title, {
          at: path.concat(0),
          select: true,
        });
      }

      if (editor.children.length < 2) {
        const paragraph: ParagraphElement = {
          type: "paragraph",
          children: [{ text: "" }],
        };
        Transforms.insertNodes(editor, paragraph, { at: path.concat(1) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        let type: string;
        const slateIndex = childPath[0];
        const enforceType = (type) => {
          if (SlateElement.isElement(child) && child.type !== type) {
            const newProperties: Partial<SlateElement> = { type };
            Transforms.setNodes<SlateElement>(editor, newProperties, {
              at: childPath,
            });
          }
        };

        switch (slateIndex) {
          case 0:
            type = "heading-one";
            enforceType(type);
            break;
          case 1:
            type = "paragraph";
            enforceType(type);
          default:
            break;
        }
      }
    }

    return normalizeNode([node, path]);
  }; */

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

  const { postEditorState } = usePostContext();

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
          />
          <Drawing />
          <Button
            onClick={() => console.log(value)}
            type="filled"
            className={s.button}
          >
            Post
          </Button>
        </Slate>
      )}
      {postEditorState === "whiteboard" && <Whiteboard />}
      <MediaBar />
    </div>
  );
};

/* const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "title":
      return (
        <>
          <label
            style={{ userSelect: "none" }}
            contentEditable={false}
            className={s.label}
          >
            Title
          </label>
          <h2 {...attributes}>{children}</h2>
        </>
      );
    case "paragraph":
      return (
        <>
          <label
            style={{ userSelect: "none" }}
            contentEditable={false}
            className={s.label}
          >
            Content
          </label>
          <p {...attributes}>{children}</p>
        </>
      );
  }
}; */

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
