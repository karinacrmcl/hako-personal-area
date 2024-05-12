import { Photo } from "../../components/Post/ContentElements/PhotoGallery";

export type PostContent = {
  heading?: any;
  textContent?: any;
  photos?: Photo[];
  videos?: any;
  drawings?: any;
  file?: any;
  responses?: any;
  question?: any;
};

export type Category = "article" | "news" | "book" | "discussion" | "photo";

export type BookData = {
  rated: { userId: string; rating: 1 | 2 | 3 | 4 | 5 }[];
};

export type DiscussionData = {
  responses: {
    userId: string;
    upvotes: string[];
    downvotes: string[];
    content: string;
  }[];
};

export type CommentObject = {
  postId: string;
  userId: string;
  content: string;
  liked: string[];
  responses: {
    userId: string;
    content: string;
    liked: string;
  };
};

export type PostObject = {
  id: string;
  userID: string;
  content: string;
  drawing?: {
    rawData: string;
    svg: string | undefined;
  };
  photos: (string | null)[];
  files: (string | null)[];
  dateCreated: string;
  updated: string;
  postCategory: Category;
  book?: BookData;
  liked: string[];
  pinned: string[];
  commented: CommentObject[];
};
