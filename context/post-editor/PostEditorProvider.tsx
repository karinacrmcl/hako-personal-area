import React, { ReactNode, useState } from "react";
import { PostContext, PostContextType } from "./PostEditorContext";

type PropsProvider = {
  children: ReactNode;
};

export const PostEditorProvider = ({ children }: PropsProvider) => {
  const [postEditorState, setEditorState] = useState<"initial" | "whiteboard">(
    "initial"
  );
  const [svg, setSvg] = useState<SVGSVGElement | null>(null);

  const value: PostContextType = {
    postEditorState,
    setPostEditorState: (st: "initial" | "whiteboard") => setEditorState(st),
    setDrawingSvg: (sv: SVGSVGElement) => setSvg(sv),
    svgDrawing: svg,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
