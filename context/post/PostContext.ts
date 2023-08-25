import React, { createContext, useContext } from "react";

export type PostContextType = {
  openPostInput: boolean;
  setOpenPostInput: (b: boolean) => void;
};

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
