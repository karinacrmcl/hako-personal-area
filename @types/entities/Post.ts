import { CategoryType } from "../common/CategoryType";
import { PostContent } from "../common/PostContent";

export type Post = {
  postID: string;
  authorId: number;
  createdAt: Date;
  type: CategoryType;
  content: PostContent;
};
