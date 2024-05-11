import React, { ReactNode } from "react";
import s from "./ContentElements.module.scss";

type Props = {
  element: ReactNode;
};

export default function Drawing({ element }: Props) {
  return <div className={s.elem_drawing}>{element}</div>;
}
