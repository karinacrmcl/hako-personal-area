import React, { useEffect, useState } from "react";
import { getCommentsByPostId } from "../../api/publications";
import { CommentObject } from "../../@types/common/PostContent";

export default function usePublication(postId: string) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getCommentsByPostId(postId);
        // @ts-expect-error Api types
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching publications: ", error);
      }
    };

    fetchComments();
  }, []);

  return { comments };
}
