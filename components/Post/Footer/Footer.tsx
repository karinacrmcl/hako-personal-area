import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import { PostSvgSelector } from "../PostSvgSelector";
import s from "./Footer.module.scss";
import { CommentButton, LikeButton, PinButton } from "./FooterButtons";
import { CommentObject } from "../../../@types/common/PostContent";

type Props = {
  likesCount: number;
  commentsCount: number;
  onLikePost: (postId: string) => void;
  onCommentPost: (postId: string, comment: CommentObject) => void;
  onPinPost: (postId: string) => void;
  isLiked: boolean;
  isPinned: boolean;
  id: string;
};

type ItemProps = {
  count?: number;
  func: () => void;
  name: string;
  state: boolean;
};

const statsComponents = {
  like: LikeButton,
  comment: CommentButton,
  pin: PinButton,
};

const StatsItem = ({ count, func, state, name }: ItemProps) => {
  const [isActive, setIsActive] = useState(state);
  function onClickHandler() {
    setIsActive(!isActive);
    func();
  }
  const SelectedButton = statsComponents[name as keyof typeof statsComponents];
  return (
    <div className={s.footer_stats__action}>
      <Button type="small" onClick={onClickHandler}>
        <SelectedButton isActive={isActive} />
      </Button>
      <p className={s.footer_count}>{count}</p>
    </div>
  );
};

export function PostFooter({
  id,
  likesCount,
  commentsCount,
  onLikePost,
  onCommentPost,
  onPinPost,
  isLiked,
  isPinned,
}: Props) {
  console.log(isLiked);
  return (
    <div className={s.footer_container}>
      <div className={s.footer_stats}>
        <StatsItem
          count={likesCount}
          func={() => onLikePost(id)}
          name="like"
          state={isLiked}
        />
        <StatsItem
          count={commentsCount}
          func={() => null}
          name="comment"
          state={true}
        />
      </div>
      <div className={s.footer_pin}>
        <StatsItem func={() => onPinPost(id)} name="pin" state={isPinned} />
      </div>
    </div>
  );
}
