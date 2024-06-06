import React, { useRef, useState } from "react";
import s from "./Header.module.scss";
import { User } from "../../../@types/entities/User";
import { user } from "../../../mocks/user";
import { Button } from "../../UI/Button/Button";
import { PostSvgSelector } from "../PostSvgSelector";
import moment from "moment";
import { UISvgSelector } from "../../UI/UISvgSelector";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useOutsideCheck } from "../../../hooks/useOutsideClick";

type Props = {
  user: User;
  postedAt: string;
  type: string;
};

export default function PostHeader({
  user: { firstName, lastName, username, avatar },
  postedAt,
  type,
}: Props) {
  const datePosted = postedAt || moment().format("MMMM Do, h:MMA");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideCheck(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleEditPost = () => {};
  const handleDeletePost = () => {};

  const dropdownItems = [
    {
      name: "Edit the post",
      func: handleEditPost,
      icon: <UISvgSelector id="edit" />,
    },
    {
      name: "Delete the post",
      func: handleDeletePost,
      icon: <UISvgSelector id="remove" />,
    },
  ];

  return (
    <div className={s.header_container}>
      <div className={s.header_postinfo}>
        <div className={s.header_avatar}>
          <img src={avatar} alt={`${username}-avatar`} />
        </div>

        <div className={s.header_content}>
          <h5>
            {firstName} {lastName}
          </h5>
          <p>
            {type} • {datePosted}
          </p>
        </div>
      </div>
      <span ref={dropdownRef}>
        <Button
          type="small"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <UISvgSelector id="expand" />
        </Button>
      </span>
      <Dropdown
        dropdownRef={dropdownRef}
        onOpen={(b: boolean) => setIsDropdownOpen(b)}
        open={isDropdownOpen}
        items={dropdownItems}
        className={s.dropdown}
      />
    </div>
  );
}
