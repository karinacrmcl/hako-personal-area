import React, { useState } from "react";
import { User } from "../../../@types/entities/User";
import { btnStyles } from "../../../styles/constants/smallActionBtn";
import { Button } from "../../UI/Button/Button";
import { UISvgSelector } from "../../UI/UISvgSelector";
import s from "./Suggestions.module.scss";
import Avatar from "../../Profile/Avatar/Avatar";
import { Path } from "../../../constants/routes";
import { useRouter } from "next/router";

type Props = {
  user: User;
  onAddUser: () => void;
};

export default function SuggestionsItem({
  user: { avatar, firstName, lastName, location, userID },
  onAddUser,
}: Props) {
  const [avatarError, setAvatarError] = useState(false);
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`${Path.PROFILE}/${userID}`);
  };

  return (
    <div className={s.suggestions_item}>
      <div className={s.suggestions_avatar} onClick={handleNavigate}>
        {avatarError || !avatar ? (
          <Avatar />
        ) : (
          <img
            src={avatar}
            alt={`${firstName}-avatar`}
            onError={() => setAvatarError(true)}
          />
        )}
      </div>
      <div className={s.suggestions_content} onClick={handleNavigate}>
        <h5>
          {firstName} {lastName}
        </h5>
        {location && (
          <p>
            <UISvgSelector id="location" /> {location}
          </p>
        )}
      </div>
      <Button onClick={onAddUser} type="unfilled" styles={btnStyles}>
        <UISvgSelector id="user-add" />
      </Button>
    </div>
  );
}
