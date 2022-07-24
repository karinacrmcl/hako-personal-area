import classNames from "classnames";
import React, { useState } from "react";
import { Categories, useCategories } from "../../../context/postCategories";
import s from "./Categories.module.scss";
import { CategoriesSvgSelector } from "./CategoriesSvgSelector";
import { Category } from "./types";

type Props = {
  item: Category;
  expanded: boolean;
};

export function CategoryItem({ item: { name, icon, value }, expanded }: Props) {
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
      style={{
        width: expanded ? "315px" : "55px",
        padding: expanded ? "6px" : "none",
        marginLeft: expanded ? "0" : "-5px",
      }}
    >
      <div
        className={classNames(s.categories_icon, {
          [s.categories_icon_open]: active,
        })}
      >
        <CategoriesSvgSelector id={icon} />
      </div>
      {expanded && <div className={s.categories_name}>{name}</div>}
    </button>
  );
}
