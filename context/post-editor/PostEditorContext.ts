import React, { createContext, useContext } from "react";

export type Category = "article" | "news" | "book" | "discussion" | "photo";
export type PostEditorState = "initial" | "whiteboard" | "photos";

export type PhotoObject = {
  name: string;
  path: string;
};

export type PostContextType = {
  postEditorState: PostEditorState;
  postCategory: Category;
  setPostCategory: (category: Category) => void;
  setPostEditorState: (st: PostEditorState) => void;
  setDrawingSvg: (s: { svg: SVGSVGElement | null; data: any } | null) => void;
  drawing: { svg: SVGSVGElement | null; data: any } | null;
  photos: PhotoObject[];
  setPhotos: (ph: PhotoObject[]) => void;
};

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
