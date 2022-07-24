import classNames from "classnames";
import React, { ReactNode } from "react";
import s from "./ContentElements.module.scss";

type Props = {
  title?: string;
  asset?: string;
  onTop: "title" | "asset";
};

export default function PostHeading({ title, asset, onTop }: Props) {
  return (
    <div className={s.elem_heading}>
      {title && (
        <p
          className={classNames(s.elem_title, {
            [s.elem_heading_ontop]: onTop === "title",
          })}
        >
          {title}
        </p>
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
