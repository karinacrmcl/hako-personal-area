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
import Avatar from "../../Profile/Avatar/Avatar";
import { useUser } from "../../../context/user/UserContext";
import { useDeletePostMutation } from "../../../store/api/publicationsApi";
import { toast } from "react-toastify";

type Props = {
  user: User | undefined;
  postedAt: string;
  type: string;
  id: string;
};

export default function PostHeader({ user, postedAt, type, id }: Props) {
  const { user: currentUser } = useUser();

  const isAuthor = currentUser?.userID === user?.userID;

  const datePosted = postedAt || moment().format("MMMM Do, h:MMA");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [deletePost] = useDeletePostMutation();

  useOutsideCheck(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleEditPost = () => {};

  const handleDeletePost = () => {
    try {
      deletePost(id);
    } catch {
      toast.error("An error occurred while deleting the post.");
      return;
    }
    toast.success("Post deleted successfully.");
  };

  const [avatarError, setAvatarError] = useState(false);

  const dropdownItems = [
    // {
    //   name: "Edit the post",
    //   func: handleEditPost,
    //   icon: <UISvgSelector id="edit" />,
    // },
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
          {avatarError || !user?.avatar ? (
            <Avatar />
          ) : (
            <img
              src={user?.avatar}
              alt={`${user?.username}-avatar`}
              onError={() => setAvatarError(true)}
            />
          )}
        </div>

        <div className={s.header_content}>
          <h5>
            {user?.firstName} {user?.lastName}
          </h5>
          <p>
            {type} • {datePosted}
          </p>
        </div>
      </div>
      {isAuthor && (
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
      )}
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
