import React from "react";
import { User } from "../../../@types/entities/User";
import { PublicationSvgSelector } from "../../Publication/PublicationSvgSelector";
import { Button } from "../../UI/Button/Button";
import s from "./PostInput.module.scss";

type Props = {
  user: User;
};

export function PostInput({ user: { avatar } }: Props) {
  const expandInputField = () => {};

  return (
    <div className={s.postinput_container}>
      <div className={s.postinput_avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={s.postinput_field}>
        <input placeholder="What would you like to post?" />
        <div className={s.postinput_buttons}>
          <Button type="small" onClick={expandInputField}>
            <PublicationSvgSelector id="video" />
          </Button>
          <Button type="small" onClick={expandInputField}>
            <PublicationSvgSelector id="picture" />
          </Button>
        </div>
      </div>
    </div>
  );
}
