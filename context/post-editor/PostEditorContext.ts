import React, { createContext, useContext } from "react";

export type Category = "article" | "news" | "book" | "discussion" | "photo";

export type PostContextType = {
  postEditorState: "initial" | "whiteboard";
  postCategory: Category;
  setPostCategory: (category: Category) => void;
  setPostEditorState: (st: "initial" | "whiteboard") => void;
  setDrawingSvg: (s: { svg: SVGSVGElement | null; data: any } | null) => void;
  drawing: { svg: SVGSVGElement | null; data: any } | null;
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
