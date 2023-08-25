import React, { ReactNode, useState } from "react";
import { PostContext, PostContextType } from "./PostContext";

type PropsProvider = {
  children: ReactNode;
};

export const PostProvider = ({ children }: PropsProvider) => {
  const [openPostInput, setOpenPostInput] = useState<boolean>(false);

  const value: PostContextType = {
    openPostInput,
    setOpenPostInput: (b: boolean) => setOpenPostInput(b),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
