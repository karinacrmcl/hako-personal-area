import classNames from "classnames";
import React, { useState } from "react";
import { Categories, useCategories } from "../../../context/postCategories";
import s from "./LatestChats.module.scss";
import { Chat } from "./LatestChats";

type Props = {
  item: Chat;
  onAddUser: () => void;
};

// export function LatestChatsItem({ item: { author, message, messageIsRead } }: Props) {

//   const handleSetActive = () => {
//     setActive(!active);
//   };

//   return (
//     <button
//       className={s.categories_item}
//       onClick={handleSetActive}
//     >
//       <div className={s.categories_icon}>
//         <CategoriesSvgSelector id={icon} />
//       </div>
//       <div className={s.categories_name}>{name}</div>
//     </button>
//   );
// }

export default function LatestChatsItem({
  item: { avatar, fullName, location },
  onAddUser,
}: Props) {
  return (
    <div className={s.suggestions_item}>
      <div className={s.suggestions_avatar}>
        <img src={avatar} alt={`${fullName} avatar`} />
      </div>
      <div className={s.suggestions_content}>
        <h5>{fullName}</h5>
        <p>{location}</p>
      </div>
      <Button onClick={onAddUser} type="unfilled" styles={btnStyles}>
        <UISvgSelector id="user-add" />
      </Button>
    </div>
  );
}
