import React from "react";
import { CommentObject } from "../../@types/common/PostContent";
import { getPostById, updatePost } from "../../api/user";
import { useUser } from "../../context/user/UserContext";

export default function usePostFunctions() {
  const { user } = useUser();
  const userId = user?.userID;

  const handleLikePost = async (postId: string) => {
    const post = await getPostById(postId);
    const liked: string = post?.liked;

    if (!post) return;

    if (!liked.includes(userId)) {
      console.log("meow");
      // @ts-ignore
      updatePost({ ...post, liked: [...post.liked, userId] });
    } else {
      // @ts-ignore
      updatePost({
        ...post,
        liked: post.liked?.filter((id: string) => id !== userId),
      });
    }
  };

  const handlePinPost = async (postId: string) => {
    const post = await getPostById(postId);
    const pinned = post?.pinned;

    if (!post) return;

    if (!pinned.includes(userId)) {
      // @ts-ignore
      updatePost({ ...post, pinned: [...post.pinned, userId] });
    } else {
      // @ts-ignore
      updatePost({
        ...post,
        pinned: post.pinned.filter((id: string) => id !== userId),
      });
    }
  };

  const handleCommentPost = (postId: string, comment: CommentObject) => {};

  return { handleLikePost, handlePinPost, handleCommentPost };
}
