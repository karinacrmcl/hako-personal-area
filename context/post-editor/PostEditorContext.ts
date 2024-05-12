import React, { createContext, useContext } from "react";
import { Descendant } from "slate";
import { Category } from "../../@types/common/PostContent";

export type PostEditorState = "initial" | "whiteboard" | "photos";

export type MediaObject = {
  name: string;
  path: string;
  size: number;
  file: File;
};

export type PostContextType = {
  open: boolean;
  setOpen: (b: boolean) => void;
  postEditorState: PostEditorState;
  postCategory: Category;
  postEditorValue: Descendant[];
  setPostEditorValue: (v: Descendant[]) => void;
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
