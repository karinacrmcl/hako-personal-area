import React from "react";
import PostHeader from "../../components/Post/Header/Header";
import s from "./Post.module.scss";
import { user } from "../../mocks/user";
import { PostFooter } from "../../components/Post/Footer/Footer";
import Heading from "../../components/Post/ContentElements/Heading";
import Text from "../../components/Post/ContentElements/Text";
import Gallery from "../../components/Post/ContentElements/PhotoGallery";
import usePostData from "./hooks/usePostData";
import Drawing from "../../components/Post/ContentElements/Drawing";
import { PostObject } from "../../@types/common/PostContent";

// TODO: add actual publication type
export default function Post(post: PostObject) {
  // const binaryData = Buffer.from(photos?.[0].data || "", "base64");
  // const imageUrl = URL.createObjectURL(new Blob([binaryData]));
  const { category, components, gallery, drawing, date, updated } =
    usePostData(post);

  let content;

  switch (post.postCategory) {
    case "article":
      content = (
        <>
          <Heading title={components.heading} onTop="title" />
          <Text content={components.paragraph} />
        </>
      );
    case "news":
      content = (
        <>
          <Heading title={components.heading} onTop="asset" asset={updated} />
          <Text content={components.paragraph} />
        </>
      );
    case "book":
      content = (
        <>
          <Heading title={components.heading} onTop="asset" asset={updated} />
          <Text content={components.paragraph} />
        </>
      );

    default:
      break;
  }

  return (
    <div className={s.post_container}>
      <PostHeader user={user} postedAt={date} type={category} />
      {content}
      {!!gallery.length && <Gallery items={gallery} />}
      {drawing && <Drawing element={drawing} />}
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
