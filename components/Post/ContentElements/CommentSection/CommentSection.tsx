import React from "react";
import { CommentObject } from "../../../../@types/common/PostContent";
import s from "./CommentSection.module.scss";
import { Button } from "../../../UI/Button/Button";
import { UISvgSelector } from "../../../UI/UISvgSelector";
import { useUser } from "../../../../context/user/UserContext";

type Props = {
  comments: CommentObject[];
};

const CommentComponent = ({ id, userId, content }: CommentObject) => {
  const { user } = useUser();

  const isAuthor = user?.userID === userId;
  const handleOpenMenu = () => {};

  return (
    <div className={s.item}>
      <img src="" alt="" className={s.avatar} />
      <div className={s.item_content}>
        <h6>
          {user?.firstName} {user?.lastName}
        </h6>
        <p>{content}</p>
      </div>
      {isAuthor && (
        <Button type="small" onClick={handleOpenMenu}>
          <UISvgSelector id="more" />
        </Button>
      )}
    </div>
  );
};

export default function CommentSection({ comments }: Props) {
  return (
    <div className={s.container}>
      {comments.map((c) => {
        return <CommentComponent {...c} key={c.id} />;
      })}
    </div>
  );
}
