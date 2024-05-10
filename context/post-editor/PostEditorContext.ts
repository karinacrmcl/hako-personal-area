import React, { createContext, useContext } from "react";

export type Category = "article" | "news" | "book" | "discussion" | "photo";
export type PostEditorState = "initial" | "whiteboard" | "photos";

export type MediaObject = {
  name: string;
  path: string;
  size: number;
  file: File;
};

export type PostContextType = {
  postEditorState: PostEditorState;
  postCategory: Category;
  setPostCategory: (category: Category) => void;
  setPostEditorState: (st: PostEditorState) => void;
  setDrawingSvg: (s: { svg: SVGSVGElement | null; data: any } | null) => void;
  drawing: { svg: SVGSVGElement | null; data: any } | null;
  photos: MediaObject[];
  setPhotos: (ph: MediaObject[]) => void;
  files: MediaObject[];
  setFiles: (ph: MediaObject[]) => void;
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
