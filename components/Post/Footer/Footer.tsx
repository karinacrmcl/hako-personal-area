import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import s from "./Footer.module.scss";
import { CommentButton, LikeButton, PinButton } from "./FooterButtons";
import { PostObject } from "../../../@types/common/PostContent";

type Props = {
  likesCount: number;
  commentsCount: number;
  onLikePost: (post: PostObject) => void;
  onComments: () => void;
  commentsOpen: boolean;
  onPinPost: (postId: string) => void;
  isLiked: boolean;
  isPinned: boolean;
  id: string;
  post: PostObject;
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
  post,
  likesCount,
  commentsCount,
  onLikePost,
  onComments,
  onPinPost,
  isLiked,
  isPinned,
  commentsOpen,
}: Props) {
  return (
    <div className={s.footer_container}>
      <div className={s.footer_stats}>
        <StatsItem
          count={likesCount}
          func={() => onLikePost(post)}
          name="like"
          state={isLiked}
        />
        <StatsItem
          count={commentsCount}
          func={onComments}
          name="comment"
          state={commentsOpen}
        />
      </div>
      <div className={s.footer_pin}>
        <StatsItem func={() => onPinPost(id)} name="pin" state={isPinned} />
      </div>
    </div>
  );
}
