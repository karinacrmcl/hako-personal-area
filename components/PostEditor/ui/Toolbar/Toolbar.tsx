import React, { PropsWithChildren, Ref } from "react";
import s from "./Toolbar.module.scss";
import { useSlate } from "slate-react";
import { Editor } from "slate";
import { Button } from "../../../UI/Button/Button";
import { UISvgSelector } from "../../../UI/UISvgSelector";

interface BaseProps {
  className: string;
  [key: string]: unknown;
}

const MenuRaw = (
  { className, ...props }: PropsWithChildren<BaseProps>,
  ref: Ref<HTMLDivElement>
) => <div {...props} data-test-id="menu" ref={ref} className={s.menu} />;

export const Menu = React.forwardRef(MenuRaw);

const formats = ["bold", "underline", "italic"];

const ToolbarRaw = (
  { className, ...props }: PropsWithChildren<BaseProps>,
  ref: Ref<HTMLDivElement>
) => {
  const editor = useSlate();
  const clearText = () => {
    formats.map((f) => Editor.removeMark(editor, f));
  };
  return (
    <div className={s.toolbar}>
      <Button type="small" onClick={clearText}>
        <UISvgSelector id="text-clear" />
      </Button>
      <span className={s.line} />
      <Menu {...props} ref={ref} />
    </div>
  );
};

export const Toolbar = React.forwardRef(ToolbarRaw);
