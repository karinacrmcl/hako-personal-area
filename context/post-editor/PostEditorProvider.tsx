import React, { ReactNode, useState } from "react";
import { Category, PostContext, PostContextType } from "./PostEditorContext";

type PropsProvider = {
  children: ReactNode;
};

export const PostEditorProvider = ({ children }: PropsProvider) => {
  const [postEditorState, setEditorState] = useState<"initial" | "whiteboard">(
    "initial"
  );
  const [category, setCategory] = useState<Category>("article");
  const [svg, setSvg] = useState<{
    svg: SVGSVGElement | null;
    data: any;
  } | null>(null);

  const value: PostContextType = {
    postEditorState,
    setPostEditorState: (st: "initial" | "whiteboard") => setEditorState(st),
    setDrawingSvg: (sv: { svg: SVGSVGElement | null; data: any } | null) =>
      setSvg(sv),
    drawing: svg,
    postCategory: category,
    setPostCategory: (c: Category) => setCategory(c),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
