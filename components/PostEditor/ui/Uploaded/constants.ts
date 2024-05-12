import { Category } from "../../../../context/post-editor/PostEditorContext";

export const mediaUploadLimits: Record<Category, number> = {
  article: 5,
  book: 1,
  discussion: 0,
  news: 10,
  photo: 10,
};
