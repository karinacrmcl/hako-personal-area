import React from "react";
import s from "./Content.module.scss";

export default function Content() {
  return (
    <div className={s.content}>
      <h3>{"title"}</h3>
      <p>{"descripion"}</p>
    </div>
  );
}
