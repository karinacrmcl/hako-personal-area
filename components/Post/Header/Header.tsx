import React from "react";
import s from "./Header.module.scss";
import { User } from "../../../@types/entities/User";
import { user } from "../../../mocks/user";
import { Button } from "../../UI/Button/Button";
import { PostSvgSelector } from "../PostSvgSelector";
import moment from "moment";

type Props = {
  user: User;
  postedAt: Date;
  type: string;
};

export default function PostHeader({
  user: { fullName, username, avatar },
  postedAt,
  type,
}: Props) {
  const datePosted = postedAt || moment().format("MMMM Do, h:MMA");

  return (
    <div className={s.header_container}>
      <div className={s.header_postinfo}>
        <div className={s.header_avatar}>
          <img src={avatar} alt={`${username}-avatar`} />
        </div>

        <div className={s.header_content}>
          <h5>{fullName}</h5>
          <p>
            {type} • {datePosted}
          </p>
        </div>
      </div>
      <Button type="small" onClick={() => console.log("")}>
        <PostSvgSelector id="expand" />
      </Button>
    </div>
  );
}
