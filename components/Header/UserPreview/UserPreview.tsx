import Link from "next/link";
import React from "react";
import { User } from "../../../@types/entities/User";
import { Button } from "../../UI/Button/Button";
import { HeaderSvgSelector } from "../HeaderSvgSelector";
import Notifications from "../Notifications/Notifications";
import s from "./UserPreview.module.scss";

type Props = {
  user: User;
};

export default function UserPreview({ user: { avatar, fullName } }: Props) {
  return (
    <div className={s.user_container}>
      <Notifications />
      <Link href="d">
        <>
          <div className={s.user_avatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={s.user_name}>{fullName}</div>
        </>
      </Link>
      <Button type="small" onClick={() => console.log()}>
        <HeaderSvgSelector id="arrow-down" />
      </Button>

      <div className={s.user_dropdown}></div>
    </div>
  );
}
