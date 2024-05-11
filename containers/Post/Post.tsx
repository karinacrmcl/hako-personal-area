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

// TODO: add actual publication type
export default function Post(props: any) {
  // const binaryData = Buffer.from(photos?.[0].data || "", "base64");
  // const imageUrl = URL.createObjectURL(new Blob([binaryData]));
  const { category, components, gallery, drawing, date } = usePostData(props);

  console.log(props);

  return (
    <div className={s.post_container}>
      <PostHeader user={user} postedAt={date} type={category} />
      <Heading title={components.heading} onTop="title" />
      <Text content={components.paragraph} />
      {gallery && <Gallery items={gallery} />}
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
