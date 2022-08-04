import React, { CSSProperties, ReactNode } from "react";
import { UISvgSelector } from "../UISvgSelector";
import s from "./ServiceButton.module.scss";

type Props = {
  name: string;
  styles?: CSSProperties;
  children: ReactNode;
};

export function ServiceButton({ children, name, styles }: Props) {
  return (
    <button className={s.service_container} style={styles}>
      <UISvgSelector id={name} />
      <span className={s.service_text}>{children}</span>
    </button>
  );
}
