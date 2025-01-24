import classNames from "classnames";
import React, { useMemo } from "react";
import s from "./Categories.module.scss";
import { CategoriesSvgSelector } from "./CategoriesSvgSelector";
import { handleSorting, selectFeed } from "../../../store/slices/feedSlice";
import { CategoryObj } from "./types";
import { useAppSelector } from "../../../store/hooks";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

type Props = {
  item: CategoryObj;
  expanded: boolean;
};

export function CategoryItem({ item: { name, icon, value }, expanded }: Props) {
  const { sorting } = useAppSelector(selectFeed);
  const dispatch = useDispatch();

  const handleSetActive = () => {
    dispatch(handleSorting({ category: name }));
  };

  const active = useMemo(() => sorting?.includes(name), [name, sorting]);

  const isMobile = useMediaQuery({ maxWidth: "700px" });

  return (
    <button
      className={classNames(s.categories_item, {
        [s.categories_item_open]: active,
      })}
      onClick={handleSetActive}
      style={{
        width: expanded ? "315px" : isMobile ? "45px" : "55px",
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
      {expanded && <div className={s.categories_name}>{value}</div>}
    </button>
  );
}
