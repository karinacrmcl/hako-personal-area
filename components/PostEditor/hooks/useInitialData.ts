import React, { useEffect, useState } from "react";
import { EditorValueType } from "../../../@types/common/PostEditor";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";

export default function useInitialData() {
  const { postCategory } = usePostContext();

  const [initialData, setInitialData] = useState<EditorValueType>([
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
  ]);

  useEffect(() => {
    const data = getInitialContent();
    setInitialData(data);
  }, [postCategory]);

  const getInitialContent = () => {
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

  return { initialData };
}
