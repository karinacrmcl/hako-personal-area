import React, { ReactNode, useState } from "react";
import {
  Category,
  MediaObject,
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
  const [photos, setPhotosArr] = useState<MediaObject[]>([]);
  const [files, setFilesArr] = useState<MediaObject[]>([]);
  const [postEditorValue, setPostEditorValueF] = useState(null);

  const value: PostContextType = {
    postEditorState,
    setPostEditorState: (st: PostEditorState) => setEditorState(st),
    setDrawingSvg: (sv: { svg: SVGSVGElement | null; data: any } | null) =>
      setSvg(sv),
    drawing: svg,
    postCategory: category,
    setPostCategory: (c: Category) => setCategory(c),
    photos,
    setPhotos: (ph: MediaObject[]) => setPhotosArr(ph),
    files,
    setFiles: (ph: MediaObject[]) => setFilesArr(ph),
    postEditorValue,
    setPostEditorValue: (v: any) => setPostEditorValueF(v),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
