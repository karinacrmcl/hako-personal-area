import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import { HeaderSvgSelector } from "../HeaderSvgSelector";
import s from "./Notifications.module.scss";
type Props = {};

export default function Notifications({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.notifications_container}>
      <Button type="small" onClick={() => setIsOpen(!isOpen)}>
        <HeaderSvgSelector id="bell" />
      </Button>

      <div className={s.notifications_content}></div>
    </div>
  );
}
