import React from "react";
import { User } from "../../../@types/entities/User";
import { btnStyles } from "../../../styles/constants/smallActionBtn";
import { Button } from "../../UI/Button/Button";
import { UISvgSelector } from "../../UI/UISvgSelector";
import s from "./Suggestions.module.scss";

type Props = {
  user: User;
  onAddUser: () => void;
};

export default function SuggestionsItem({
  user: { avatar, firstName, lastName, location },
  onAddUser,
}: Props) {
  return (
    <div className={s.suggestions_item}>
      <div className={s.suggestions_avatar}>
        <img src={avatar} alt={`${firstName} avatar`} />
      </div>
      <div className={s.suggestions_content}>
        <h5>
          {firstName} {lastName}
        </h5>
        <p>{location}</p>
      </div>
      <Button onClick={onAddUser} type="unfilled" styles={btnStyles}>
        <UISvgSelector id="user-add" />
      </Button>
    </div>
  );
}
