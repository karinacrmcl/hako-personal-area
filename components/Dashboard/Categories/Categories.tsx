import React from "react";
import { CategoryItem } from "./CategoryItem";
import { Category } from "./types";
import s from "./Categories.module.scss";
// import CategoriesProvider from "../../../providers/postCategories";

type Props = {
  categories: Category[];
  expanded: boolean;
};

export default function Categories({ categories, expanded }: Props) {
  return (
    // <CategoriesProvider>
    <div
      className={s.categories_container}
      style={{ width: expanded ? "100%" : "55px" }}
    >
      {categories.map((item: Category) => {
        return <CategoryItem key={item.id} item={item} expanded={expanded} />;
      })}
    </div>
    // </CategoriesProvider>
  );
}
