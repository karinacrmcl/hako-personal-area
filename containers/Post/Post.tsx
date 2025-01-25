import React from "react";
import PostHeader from "../../components/Post/Header/Header";
import s from "./Post.module.scss";
import { PostFooter } from "../../components/Post/Footer/Footer";
import Heading from "../../components/Post/ContentElements/Heading";
import Text from "../../components/Post/ContentElements/Text";
import Gallery from "../../components/Post/ContentElements/PhotoGallery";
import usePostData from "./hooks/usePostData";
import Drawing from "../../components/Post/ContentElements/Drawing";
import { PostObject } from "../../@types/common/PostContent";
import usePostFunctions from "../../hooks/api/usePostFunctions";
import CommentSection from "../../components/Post/ContentElements/CommentSection/CommentSection";

// TODO: add actual publication type
export default function Post(post: PostObject) {
  // const binaryData = Buffer.from(photos?.[0].data || "", "base64");
  // const imageUrl = URL.createObjectURL(new Blob([binaryData]));
  const {
    category,
    components,
    gallery,
    drawing,
    date,
    updated,
    isLiked,
    isPinned,
    commentsOpen,
    handleOpenComment,
    commentsCount,
    comments,
    author,
    id,
  } = usePostData(post);

  const { handleLikePost, handlePinPost } = usePostFunctions();

  const getContentByCategory = () => {
    switch (post.postCategory) {
      case "article":
        return (
          <>
            <Heading title={components.heading} onTop="title" />
            <Text content={components.paragraph} />
          </>
        );
      case "news":
        return (
          <>
            <Heading title={components.heading} onTop="asset" asset={updated} />
            <Text content={components.paragraph} />
          </>
        );
      case "book":
        return (
          <>
            <Heading title={components.heading} onTop="asset" asset={updated} />
            <Text content={components.paragraph} />
          </>
        );

      default:
        break;
    }
  };

  const content = getContentByCategory();

  console.log("author", author);

  return (
    <div className={s.post_container}>
      <div className={s.content}>
        <PostHeader user={author} postedAt={date} type={category} id={id} />
        {content}
        {!!gallery.length && <Gallery items={gallery} />}
        {drawing && <Drawing element={drawing} />}
        <PostFooter
          post={post}
          id={post.id}
          likesCount={post.liked.length}
          commentsCount={commentsCount}
          onLikePost={handleLikePost}
          onComments={handleOpenComment}
          onPinPost={handlePinPost}
          isLiked={isLiked}
          isPinned={isPinned}
          commentsOpen={commentsOpen}
        />
      </div>
      <CommentSection
        open={commentsOpen}
        comments={comments}
        postId={post.id}
      />
    </div>
  );
}
