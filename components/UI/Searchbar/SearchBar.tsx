import React, { ChangeEvent } from "react";
import { UISvgSelector } from "../UISvgSelector";
import s from "./SearchBar.module.scss";
import classNames from "classnames";
import { useAppSelector } from "../../../store/hooks";
import { handleSearch, selectFeed } from "../../../store/slices/feedSlice";
import { useDispatch } from "react-redux";

export function SearchBar() {
  const { searchTerm } = useAppSelector(selectFeed);
  const dispatch = useDispatch();

  const handleSearchBar = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleSearch({ searchTerm: e.target.value }));
  };

  // TODO: add logic for searching not only for the publications but people ttc

  return (
    <div className={classNames(s.searchbar_container, {})}>
      <UISvgSelector id="search" />
      <input
        value={searchTerm}
        placeholder="Search"
        onChange={handleSearchBar}
      />
    </div>
  );
}
