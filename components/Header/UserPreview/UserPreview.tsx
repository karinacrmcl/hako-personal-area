import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { HeaderSvgSelector } from "../HeaderSvgSelector";
import Notifications from "../Notifications/Notifications";
import s from "./UserPreview.module.scss";
import { useUser } from "../../../context/user/UserContext";
import { signout } from "../../../api/auth";
import useAppNavigation from "../../../context/navigation/NavigatonContext";
import Avatar from "../../Profile/Avatar/Avatar";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { UISvgSelector } from "../../UI/UISvgSelector";
import { useOutsideCheck } from "../../../hooks/useOutsideClick";
import { useRouter } from "next/router";
import { Path } from "../../../constants/routes";

export default function UserPreview() {
  const { user } = useUser();
  const { goToSignUp } = useAppNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  function onChats() {
    setIsDropdownOpen(false);
  }

  function onMyProfile() {
    router.push(Path.PROFILE);
    setIsDropdownOpen(false);
  }

  function onSettings() {
    setIsDropdownOpen(false);
  }

  const dropdownItems = [
    {
      name: "Chats",
      func: onChats,
      icon: <UISvgSelector id="chats" />,
    },
    {
      name: "My profile",
      func: onMyProfile,
      icon: <UISvgSelector id="profile" />,
    },
    {
      name: "Settings",
      func: onSettings,
      icon: <UISvgSelector id="settings" />,
    },
  ];

  useOutsideCheck(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  return (
    <div className={s.user_container}>
      <Notifications />
      <Link href={`/profile/${user?.userID}`}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Avatar />
          <div className={s.user_name}>
            {user?.firstName} {user?.lastName}
          </div>
        </div>
      </Link>
      <span ref={dropdownRef}>
        <Button
          type="small"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <HeaderSvgSelector id="arrow-down" />
        </Button>
      </span>
      <div className={s.user_dropdown}>
        <Dropdown
          dropdownRef={dropdownRef}
          onOpen={(b: boolean) => setIsDropdownOpen(b)}
          open={isDropdownOpen}
          items={dropdownItems}
        />
      </div>
    </div>
  );
}
