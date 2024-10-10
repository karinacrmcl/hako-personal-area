import React, { useEffect, useState } from "react";
import { CommentObject } from "../../@types/common/PostContent";
import { useGetCommentsByPostIdQuery } from "../../store/api/publicationsApi";

export default function usePublication(postId: string) {

  const {data: comments} = useGetCommentsByPostIdQuery(postId);
// Add common loading for all the data in the post obj and pass it as a prop for building a UI 

  return { comments };
}
