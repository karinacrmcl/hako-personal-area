import React from "react";
import { CategoryItem } from "./CategoryItem";
import { Category } from "./types";
import s from "./Categories.module.scss";
// import CategoriesProvider from "../../../providers/postCategories";

type Props = {
  categories: Category[];
};

export default function Categories({ categories }: Props) {
  return (
    // <CategoriesProvider>
    <div className={s.categories_container}>
      {categories.map((item: Category) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </div>
    // </CategoriesProvider>
  );
}
