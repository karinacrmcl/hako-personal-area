import React, { CSSProperties, ReactNode } from "react";
import s from "./Button.module.scss";
import classNames from "classnames";

type Props = {
  type: "filled" | "unfilled" | "small";
  children: ReactNode;
  styles?: CSSProperties;
  HTMLType?: "button" | "submit" | "reset";
  onClick: () => void;
  className?: string;
};

export function Button({
  children,
  type,
  styles = {},
  HTMLType = "button",
  onClick,
  className,
}: Props) {
  return (
    <button
      style={{ ...styles }}
      type={HTMLType}
      className={classNames(s[`button_${type}`], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
