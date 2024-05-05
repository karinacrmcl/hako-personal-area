import React, { ReactNode } from "react";
import s from "./Section.module.scss";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

export function Section({ children, title, className }: Props) {
  return (
    <div className={classNames(s.section_container, className)}>
      <h2 className={s.section_title}>{title}</h2>
      <div className={s.section_content}>{children}</div>
    </div>
  );
}
