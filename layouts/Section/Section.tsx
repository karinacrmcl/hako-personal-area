import React, { ReactNode } from "react";
import s from "./Section.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export function Section({ children, title }: Props) {
  return (
    <div className={s.section_container}>
      <h2 className={s.section_title}>{title}</h2>
      <div className={s.section_content}>{children}</div>
    </div>
  );
}
