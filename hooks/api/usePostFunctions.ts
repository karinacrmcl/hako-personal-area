import React from "react";
import { CommentObject } from "../../@types/common/PostContent";
import { useUser } from "../../context/user/UserContext";
import { toast } from "react-toastify";
import {
  deleteComment,
  getCommentById,
  updateComment,
} from "../../api/publications";
import { useUpdatePostMutation } from "../../store/api/publicationsApi";

export default function usePostFunctions() {
  const { user } = useUser();
  const userId = user?.userID;


  const [updatePost] = useUpdatePostMutation()

  const handleLikePost = async (postId: string) => {
    const post = await getPostById(postId);
    const liked = post?.liked;

    if (!post) return;

    if (!liked?.includes(userId)) {
      console.log("meow");
      updatePost({ ...post, liked: [...post.liked, userId] });
    } else {
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

    if (!pinned?.includes(userId)) {
      // @ts-ignore
      updatePost({ ...post, pinned: [...(post?.pinned || []), userId] });
    } else {
      // @ts-ignore
      updatePost({
        ...post,
        pinned: post?.pinned?.filter((id: string) => id !== userId),
      });
    }
  };

  const handleCommentPost = async (comment: CommentObject) => {
    try {
      await addUserComment(comment);
    } catch (e) {
      toast.error(
        "An error ocurred while posting your comment. Please try again."
      );
      console.log(e);
      return;
    }
    toast.success("Your comment was successfully added.");
  };

  const handleUpdateComment = async (id: string, content: string) => {
    const comment = await getCommentById(id);

    if (!comment) return;

    try {
      await updateComment({ ...comment, content });
    } catch (e) {
      toast.error(
        "An error ocurred while updating your comment. Please try again."
      );
      console.log(e);
      return;
    }
    toast.success("Your comment was successfully updated.");
  };

  const handleDeleteComment = async (id: string) => {
    try {
      await deleteComment(id);
    } catch (e) {
      console.log(e);
      toast.error(
        "An error ocurred while removing the comment. Please try again."
      );
    }
    toast.success("The comment was deleted.");
  };

  return {
    handleLikePost,
    handlePinPost,
    handleCommentPost,
    handleUpdateComment,
    handleDeleteComment,
  };
}
