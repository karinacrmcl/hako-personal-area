import React, { useState } from "react";
import { User } from "../../../@types/entities/User";
import { PublicationSvgSelector } from "../../Publication/PublicationSvgSelector";
import { Button } from "../../UI/Button/Button";
import s from "./PostInput.module.scss";
import classNames from "classnames";

type Props = {
  user: User;
};

export function PostInput({ user: { avatar } }: Props) {
  const [expanded, setExpanded] = useState(false);
  const expandInputField = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const {} = 

  return (
    <div
      className={classNames(s.postinput_container, {
        [s.postinput_expanded]: expanded,
      })}
      onClick={expandInputField}
    >
      <div className={s.postinput_avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div
        className={classNames(s.postinput_field, {
          [s.postinput_field_expanded]: expanded,
        })}
      >
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
