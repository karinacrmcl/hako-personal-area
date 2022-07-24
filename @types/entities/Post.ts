import { CategoryType } from "../common/CategoryType";
import { PostContent } from "../common/PostContent";

export type Post = {
  authorId: number;
  createdAt: Date;
  type: CategoryType;
  content: PostContent;
};
