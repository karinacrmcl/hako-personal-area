import React, { ReactNode, useState } from "react";
import {
  Category,
  PhotoObject,
  PostContext,
  PostContextType,
  PostEditorState,
} from "./PostEditorContext";

type PropsProvider = {
  children: ReactNode;
};

export const PostEditorProvider = ({ children }: PropsProvider) => {
  const [postEditorState, setEditorState] =
    useState<PostEditorState>("initial");
  const [category, setCategory] = useState<Category>("article");
  const [svg, setSvg] = useState<{
    svg: SVGSVGElement | null;
    data: any;
  } | null>(null);
  const [photos, setPhotosArr] = useState<PhotoObject[]>([]);

  const value: PostContextType = {
    postEditorState,
    setPostEditorState: (st: PostEditorState) => setEditorState(st),
    setDrawingSvg: (sv: { svg: SVGSVGElement | null; data: any } | null) =>
      setSvg(sv),
    drawing: svg,
    postCategory: category,
    setPostCategory: (c: Category) => setCategory(c),
    photos,
    setPhotos: (ph: PhotoObject[]) => setPhotosArr(ph),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
