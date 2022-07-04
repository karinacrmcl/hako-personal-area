import React from "react";
import { User } from "../../@types/entities/User";
import UserPreview from "../../components/Header/UserPreview/UserPreview";
import Logo from "../../components/UI/Logo/Logo";
import s from "./Header.module.scss";

type Props = {
  user: User;
};

export default function Header({ user }: Props) {
  return (
    <div className={s.header_container}>
      <Logo size={50} />
      <UserPreview user={user} />
    </div>
  );
}
