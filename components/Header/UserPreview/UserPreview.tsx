import Link from "next/link";
import React from "react";
import { User } from "../../../@types/entities/User";
import { Button } from "../../UI/Button/Button";
import { HeaderSvgSelector } from "../HeaderSvgSelector";
import Notifications from "../Notifications/Notifications";
import s from "./UserPreview.module.scss";
import { useUser } from "../../../context/user/UserContext";
import { signout } from "../../../api/auth";
import useAppNavigation from "../../../context/navigation/NavigatonContext";

export default function UserPreview() {
  const { user } = useUser();
  const { goToSignUp } = useAppNavigation();

  console.log(user);

  return (
    <div className={s.user_container}>
      <Notifications />
      <Link href="d">
        <>
          <div className={s.user_avatar}>
            {/* <img src={avatar} alt="avatar" /> */}
          </div>
          <div className={s.user_name}>{user?.username}</div>
        </>
      </Link>
      <Button
        type="small"
        onClick={() => {
          signout();
          goToSignUp();
        }}
      >
        <HeaderSvgSelector id="arrow-down" />
      </Button>

      <div className={s.user_dropdown}></div>
    </div>
  );
}
