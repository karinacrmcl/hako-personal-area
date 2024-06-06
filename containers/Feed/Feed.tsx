import React from "react";
import { PostInput } from "../../components/Dashboard/PostInput/PostInput";
import usePublications from "../../hooks/api/usePublications";
import { user } from "../../mocks/user";
import Post from "../Post/Post";
import s from "./Feed.module.scss";
import { PostObject } from "../../@types/common/PostContent";

export function Feed() {
  const { publications } = usePublications();

  return (
    <div className={s.feed_container}>
      <PostInput user={user} />
      {publications.map((pb: PostObject) => (
        <Post key={pb?.id} {...pb} />
      ))}
    </div>
  );
}
