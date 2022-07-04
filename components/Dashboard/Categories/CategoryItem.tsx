import classNames from "classnames";
import React, { useState } from "react";
import { Categories, useCategories } from "../../../context/postCategories";
import s from "./Categories.module.scss";
import { CategoriesSvgSelector } from "./CategoriesSvgSelector";
import { Category } from "./types";

type Props = {
  item: Category;
};

export function CategoryItem({ item: { name, icon, value } }: Props) {
  const { activeCategories, setActiveCategories } = useCategories();
  const [active, setActive] = useState(
    activeCategories[value as keyof typeof activeCategories]
  );

  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <button
      className={classNames(s.categories_item, {
        [s.categories_item_open]: active,
      })}
      onClick={handleSetActive}
    >
      <div className={s.categories_icon}>
        <CategoriesSvgSelector id={icon} />
      </div>
      <div className={s.categories_name}>{name}</div>
    </button>
  );
}
