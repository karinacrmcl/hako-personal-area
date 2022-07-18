import React from "react";
import PostHeader from "../../components/Post/Header/Header";
import s from "./Post.module.scss";
import { user } from "../../mocks/user";
import { PostFooter } from "../../components/Post/Footer/Footer";
import Heading from "../../components/Post/ContentElements/Heading";
import Text from "../../components/Post/ContentElements/Text";

type Props = {};

export default function Post({}: Props) {
  return (
    <div className={s.post_container}>
      <PostHeader user={user} postedAt={new Date()} type="Article" />
      <PostFooter
        likesCount={0}
        commentsCount={0}
        onLikePost={() => console.log()}
        onCommentPost={() => console.log()}
        onPinPost={() => console.log()}
      />
    </div>
  );
}
