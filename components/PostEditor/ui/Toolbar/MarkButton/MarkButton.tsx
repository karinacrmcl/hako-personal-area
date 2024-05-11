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
    const marks = Editor?.marks(editor);
    // @ts-ignore
    return marks ? marks[format] === true : false;
  };
  const isActive = isMarkActive(editor, format);
  console.log(isActive);

  const toggleMark = (editor: any, format: string) => {
    console.log("click", editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
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
