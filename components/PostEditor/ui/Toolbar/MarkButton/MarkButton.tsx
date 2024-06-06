import React from "react";
import { useSlate } from "slate-react";
import { Editor } from "slate";
import s from "./MarkButton.module.scss";
import { Button } from "../../../../UI/Button/Button";
import { UISvgSelector } from "../../../../UI/UISvgSelector";

type Props = {
  format: string;
};

export default function MarkButton({ format }: Props) {
  const editor = useSlate();

  function isEditorEmpty() {
    return (
      editor.children.length === 0 ||
      // @ts-expect-error meow
      (editor.children.length === 1 && Node.string(editor.children[0]) === "")
    );
  }

  if (isEditorEmpty()) return null;

  const isMarkActive = (editor: any, format: string) => {
    try {
      const marks = Editor?.marks(editor);
      // return marks.length > ? marks?.[format || ''] === true : false;
      // @ts-expect-error Library types
      return !!marks?.[format];
    } catch (e) {
      console.log(e);
    }
  };
  const isActive = editor ? isMarkActive(editor, format) : false;

  const toggleMark = (editor: any, format: string) => {
    try {
      if (isActive) {
        Editor?.removeMark(editor, format);
      } else {
        Editor?.addMark(editor, format, true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Button
      className={isActive ? s.button_active : ""}
      type="small"
      onClick={() => toggleMark(editor, format)}
    >
      <UISvgSelector id={format} />
    </Button>
  );
}
