import React from "react";
import { PostInput } from "../../components/Dashboard/PostInput/PostInput";
import usePublications from "../../hooks/api/usePublications";
import { user } from "../../mocks/user";
import Post from "../Post/Post";
import s from "./Feed.module.scss";

export function Feed() {
  const { publications } = usePublications();

  console.log(publications);

  return (
    <div className={s.feed_container}>
      <PostInput user={user} />
      {publications.map((pb) => (
        <Post key={pb?.id} {...pb} />
      ))}
    </div>
  );
}
