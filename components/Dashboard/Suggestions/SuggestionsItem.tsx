import React from "react";
import { User } from "../../../@types/entities/User";
import { Button } from "../../UI/Button/Button";
import { UISvgSelector } from "../../UI/UISvgSelector";
import s from "./Suggestions.module.scss";

type Props = {
  user: User;
  onAddUser: () => void;
};

export default function SuggestionsItem({
  user: { id, avatar, fullName, location },
  onAddUser,
}: Props) {
  return (
    <div className={s.suggestions_item}>
      <div className={s.suggestions_avatar}>
        <img src={avatar} alt={`${fullName} avatar`} />
      </div>
      <div className={s.suggestions_content}>
        <h5>{fullName}</h5>
        <p>{location}</p>
      </div>
      <Button onClick={onAddUser} type="unfilled">
        <UISvgSelector id="user-plus" />
      </Button>
    </div>
  );
}
