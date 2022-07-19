import React from "react";
import { PostInput } from "../../components/Dashboard/PostInput/PostInput";
import { user } from "../../mocks/user";
import Post from "../Post/Post";
import s from "./Feed.module.scss";

export function Feed() {
  return (
    <div className={s.feed_container}>
      <PostInput user={user} />
      <Post />
      <Post />
    </div>
  );
}
