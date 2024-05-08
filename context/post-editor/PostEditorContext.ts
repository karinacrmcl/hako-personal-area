import React, { createContext, useContext } from "react";

export type PostContextType = {
  postEditorState: "initial" | "whiteboard";
  setPostEditorState: (st: "initial" | "whiteboard") => void;
  setDrawingSvg: (svg: SVGSVGElement) => void;
  svgDrawing: SVGSVGElement | null;
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
