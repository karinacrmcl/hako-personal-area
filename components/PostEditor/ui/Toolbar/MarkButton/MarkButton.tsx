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

  const isMarkActive = (editor: any, format: string) => {
    try {
      const marks = Editor?.marks(editor);
      // @ts-ignore
      return marks ? marks[format] === true : false;
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
