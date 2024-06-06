import React from "react";
import { User } from "../../../@types/entities/User";
import { Button } from "../../UI/Button/Button";
import ProfileSvgSelector from "../ProfileSvgSelector";
import s from "./ProfileCard.module.scss";
import Avatar from "../Avatar/Avatar";

type Props = {
  user: User;
  onShowPosts: () => void;
  onShowPinned: () => void;
  onMessageUser: () => void;
  onAddUser: () => void;
  onExpandBtn: () => void;
};

export default function ProfileCard({
  user: {
    avatar,
    firstName,
    lastName,
    location,
    followers,
    following,
    posts,
    pinned,
  },
  onShowPosts,
  onShowPinned,
  onMessageUser,
  onAddUser,
  onExpandBtn,
}: Props) {
  const followingCount = following?.length;
  const followersCount = followers?.length;

  const publicationsCount = posts?.length || "0";
  const pinnedCount = pinned?.length || "0";

  return (
    <div className={s.profilecard_container}>
      <div className={s.profilecard_expand}>
        <Button type="small" onClick={onExpandBtn}>
          <ProfileSvgSelector id="expand" />
        </Button>
      </div>

      <div className={s.profilecard_userinfo}>
        <Avatar src={avatar} className={s.avatar} />
        <div className={s.profilecard_name}>
          {firstName} {lastName}
        </div>
        <div className={s.profilecard_location}>
          <ProfileSvgSelector id="location" />
          {location}
        </div>
      </div>

      <div className={s.profilecard_following}>
        <div className={s.profilecard_following__item}>
          <span>{followingCount || 0}</span>
          <p>following</p>
        </div>
        <div className={s.profilecard_following__item}>
          <span>{followersCount || 0}</span>
          <p>followers</p>
        </div>
      </div>

      <div className={s.profilecard_publications}>
        <button
          className={s.profilecard_publications__item}
          onClick={onShowPosts}
        >
          <ProfileSvgSelector id="post" />
          <p>Publications</p>
          <span>{publicationsCount}</span>
        </button>
        <button
          className={s.profilecard_publications__item}
          onClick={onShowPinned}
        >
          <ProfileSvgSelector id="bookmark" />
          <p>Pinned publications</p>
          <span>{pinnedCount}</span>
        </button>
      </div>

      <div className={s.profilecard_actionbuttons}>
        <Button type="small" onClick={onMessageUser}>
          <ProfileSvgSelector id="chat" />
        </Button>
        <Button type="small" onClick={onAddUser}>
          <ProfileSvgSelector id="add-person" />
        </Button>
      </div>
    </div>
  );
}
