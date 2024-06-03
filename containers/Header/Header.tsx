import React from "react";
import { User } from "../../@types/entities/User";
import UserPreview from "../../components/Header/UserPreview/UserPreview";
import Logo from "../../components/UI/Logo/Logo";
import s from "./Header.module.scss";
import { useUser } from "../../context/user/UserContext";
import { SearchBar } from "../../components/UI/Searchbar/SearchBar";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isLaptop = useMediaQuery({ maxWidth: "1500px" });

  return (
    <div className={s.header_container}>
      <Logo size={50} />
      {isLaptop && <SearchBar />}
      <UserPreview />
    </div>
  );
}
