import classNames from "classnames";
import React, { ReactNode } from "react";
import s from "./ContentElements.module.scss";

type Props = {
  title?: string | ReactNode;
  asset?: string;
  onTop: "title" | "asset";
};

export default function PostHeading({ title, asset, onTop }: Props) {
  return (
    <div className={s.elem_heading}>
      {title && (
        <div
          className={classNames(s.elem_title, {
            [s.elem_heading_ontop]: onTop === "title",
          })}
        >
          {title}
        </div>
      )}
      {asset && (
        <p
          className={classNames(s.elem_asset, {
            [s.elem_heading_ontop]: onTop === "asset",
          })}
        >
          {asset}
        </p>
      )}
    </div>
  );
}
