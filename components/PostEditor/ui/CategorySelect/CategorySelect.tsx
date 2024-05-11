import React, { useRef, useState } from "react";
import {
  Category,
  usePostContext,
} from "../../../../context/post-editor/PostEditorContext";
import Select from "../../../UI/Select/Select";

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

export default function CategorySelect({}: Props) {
  const { setPostCategory, postCategory } = usePostContext();

  const currentCategory = dropdownCategories.find(
    (meow) => meow.name === postCategory
  );

  return (
    <Select
      options={dropdownCategories}
      activeValue={currentCategory?.label || ""}
      setActiveValue={(category) => setPostCategory(category as Category)}
      className=""
    />
  );
}
