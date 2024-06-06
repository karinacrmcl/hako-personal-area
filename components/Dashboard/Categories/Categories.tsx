import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CategoryObj } from "./types";
import s from "./Categories.module.scss";
import classNames from "classnames";
// import CategoriesProvider from "../../../providers/postCategories";

type Props = {
  categories: CategoryObj[];
  expanded: boolean;
};

export default function Categories({ categories, expanded }: Props) {
  return (
    // <CategoriesProvider>
    <div
      className={classNames(s.categories_container, { [s.expanded]: expanded })}
    >
      {categories.map((item: CategoryObj) => {
        return <CategoryItem key={item.id} item={item} expanded={expanded} />;
      })}
    </div>
    // </CategoriesProvider>
  );
}
