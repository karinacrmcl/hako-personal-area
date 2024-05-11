import React, { ReactNode, useState } from "react";
import { Descendant } from "slate";
import { EditorValueType } from "../../@types/common/PostEditor";
import useInitialData from "../../components/PostEditor/hooks/useInitialData";
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

const getInitialContent = (postCategory: Category) => {
  switch (postCategory) {
    case "news":
      return [
        {
          type: "heading-one",
          children: [{ text: "Name your news post..." }],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "What would you like to post?",
            },
          ],
        },
      ];
    case "book":
      return [
        {
          type: "heading-one",
          children: [{ text: "Title of a book..." }],
        },
        {
          type: "heading-two",
          children: [
            {
              text: "Name the author...",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "What would you like to post?",
            },
          ],
        },
      ];
    case "discussion":
      return [
        {
          type: "heading-one",
          children: [{ text: "What question would you like to ask?" }],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Add your opinion on a question",
            },
          ],
        },
      ];
    default:
    case "article":
      return [
        {
          type: "heading-one",
          children: [{ text: "Name your article..." }],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "What would you like to post?",
            },
          ],
        },
      ];
  }
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

  const initialData = getInitialContent(category);

  const [postEditorValue, setPostEditorValueF] =
    useState<Descendant[]>(initialData);
  const [openF, setOpenF] = useState(false);

  const value: PostContextType = {
    open: openF,
    setOpen: (p: boolean) => {
      setOpenF(p);
      console.log(p);
    },
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
    setPostEditorValue: (v: Descendant[]) => setPostEditorValueF(v),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
