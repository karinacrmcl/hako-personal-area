import React from "react";
import { User } from "../../../@types/entities/User";
import { Button } from "../../UI/Button/Button";
import { HeaderSvgSelector } from "../HeaderSvgSelector";
import s from "./User.module.scss";

type Props = {
  user: User;
};

export default function User({ user: { avatar, fullName } }: Props) {
  return (
    <div className={s.user_container}>
      <div className={s.user_avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={s.user_name}>{fullName}</div>
      <Button type="small" onClick={() => console.log()}>
        <HeaderSvgSelector id="arrow-down" />
      </Button>
    </div>
  );
}
