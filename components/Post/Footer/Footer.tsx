import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import { PostSvgSelector } from "../PostSvgSelector";
import s from "./Footer.module.scss";
import { CommentButton, LikeButton, PinButton } from "./FooterButtons";

type Props = {
  likesCount: number;
  commentsCount: number;
  onLikePost: () => void;
  onCommentPost: () => void;
  onPinPost: () => void;
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
  likesCount,
  commentsCount,
  onLikePost,
  onCommentPost,
  onPinPost,
}: Props) {
  return (
    <div className={s.footer_container}>
      <div className={s.footer_stats}>
        <StatsItem
          count={likesCount}
          func={onLikePost}
          name="like"
          state={false}
        />
        <StatsItem
          count={commentsCount}
          func={onCommentPost}
          name="comment"
          state={true}
        />
      </div>
      <div className={s.footer_pin}>
        <StatsItem func={onPinPost} name="pin" state={true} />
      </div>
    </div>
  );
}
