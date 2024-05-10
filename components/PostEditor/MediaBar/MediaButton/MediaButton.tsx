import React, { ReactNode } from "react";
import { Button } from "../../../UI/Button/Button";
import { UISvgSelector } from "../../../UI/UISvgSelector";
import s from "./MediaButton.module.scss";

type Props = {
  icon: string;
  onClick: () => void;
  children?: ReactNode;
};

export default function MediaButton({ children, icon, onClick }: Props) {
  return (
    <Button onClick={onClick} type="small" className={s.button}>
      <UISvgSelector id={icon} />
      {children}
    </Button>
  );
}
