import React from "react";
import { User } from "../../@types/entities/User";
import UserPreview from "../../components/Header/UserPreview/UserPreview";
import Logo from "../../components/UI/Logo/Logo";
import s from "./Header.module.scss";
import { useUser } from "../../context/user/UserContext";

export default function Header() {
  const { user } = useUser();
  console.log(user);

  return (
    <div className={s.header_container}>
      <Logo size={50} />
      <UserPreview />
    </div>
  );
}
