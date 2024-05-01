import React from "react";
import { UISvgSelector } from "../UISvgSelector";
import s from "./SearchBar.module.scss";
import classNames from "classnames";

export function SearchBar() {
  return (
    <div
      className={classNames(s.searchbar_container, {
        /*       [s.searchbar_expanded]: expanded, */
      })}
    >
      <UISvgSelector id="search" />
      <input placeholder="Search" />
    </div>
  );
}
