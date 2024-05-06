import React, { ReactNode, useState } from "react";
import { PostContext, PostContextType } from "./PostEditorContext";

type PropsProvider = {
  children: ReactNode;
};

export const PostEditorProvider = ({ children }: PropsProvider) => {
  const [postEditorState, setEditorState] = useState<"initial" | "whiteboard">(
    "initial"
  );

  const value: PostContextType = {
    postEditorState,
    setPostEditorState: (st: "initial" | "whiteboard") => setEditorState(st),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
