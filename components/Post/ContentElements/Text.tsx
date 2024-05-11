import React, { ReactNode, useEffect, useState } from "react";
import s from "./ContentElements.module.scss";

type Props = {
  content: string | ReactNode;
};

export default function PostText({ content }: Props) {
  return <div className={s.elem_text}>{content}</div>;
}
