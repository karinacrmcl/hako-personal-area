import React, { useRef, useState } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";
import Select from "../../../UI/Select/Select";
import { Category } from "../../../../@types/common/PostContent";

type Props = {};

const dropdownCategories: { label: string; name: Category }[] = [
  {
    label: "Post & Article",
    name: "article",
  },
  {
    label: "Latest news",
    name: "news",
  },
  {
    label: "Book recomendation",
    name: "book",
  },
  {
    label: "Discussion",
    name: "discussion",
  },
  {
    label: "Photo",
    name: "photo",
  },
];

const formats = ["bold", "underline", "italic"];

export default function CategorySelect({}: Props) {
  const { setPostCategory, postCategory, setPhotos } = usePostContext();
  const editor = useSlate();

  const currentCategory = dropdownCategories.find(
    (meow) => meow.name === postCategory
  );

  const clearText = () => {
    formats.map((f) => Editor.removeMark(editor, f));
  };

  return (
    <Select
      options={dropdownCategories}
      activeValue={currentCategory?.label || ""}
      setActiveValue={(category) => {
        clearText();
        setPostCategory(category as Category);
        setPhotos([]);
      }}
      className=""
    />
  );
}
