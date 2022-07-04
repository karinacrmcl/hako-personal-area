import React from "react";
import { UISvgSelector } from "../UISvgSelector";
import s from "./SearchBar.module.scss";

type Props = {};

export function SearchBar({}: Props) {
  return (
    <div className={s.searchbar_container}>
      <UISvgSelector id="search" />
      <input placeholder="Search" />
    </div>
  );
}
