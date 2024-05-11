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

export const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...props}
      data-test-id="menu"
      ref={ref}
      className={s.menu}
      /*   className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `
      )} */
    />
  )
);

const formats = ["bold", "underline", "italic"];

export const Toolbar = React.forwardRef(
  (
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
        <Menu
          {...props}
          ref={ref}
          /*     className={cx(
              className,
              css`
              position: relative;
              padding: 1px 18px 17px;
              margin: 0 -20px;
              border-bottom: 2px solid #eee;
              margin-bottom: 20px;
              `
            )} */
        />
      </div>
    );
  }
);
