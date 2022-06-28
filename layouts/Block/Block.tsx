import React, { CSSProperties, ReactNode } from "react";
import s from "./Block.module.scss";

type Props = {
  children: ReactNode;
  title: string;
  titleAsset: ReactNode;
  styles: CSSProperties;
};

export default function Block({ children, title, titleAsset, styles }: Props) {
  return (
    <div className={s.block_container} style={styles}>
      <div className={s.block_header}>
        <h3 className={s.block_title}>{title}</h3>
        <div className={s.block_titleasset}>{titleAsset}</div>
      </div>
      <div className={s.block_content}>{children}</div>
    </div>
  );
}
