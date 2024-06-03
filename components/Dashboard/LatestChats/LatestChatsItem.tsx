import classNames from "classnames";
import React from "react";
import s from "./LatestChats.module.scss";
import { Chat } from "./LatestChats";
import { calculateTimeAgo } from "../../../utils/helpers/calculateTimeAgo";
import { makeSuspensionString } from "../../../utils/common/makeSuspensionString";

type Props = {
  item: Chat;
  onOpenChat: () => void;
};

export function LatestChatsItem({
  item: {
    author: { avatar, lastName, firstName },
    message: { content, sentAt },
    messageIsRead,
  },
  onOpenChat,
}: Props) {
  const timeSince = calculateTimeAgo(sentAt);
  const messageContent = makeSuspensionString(content, 35);

  return (
    <button onClick={onOpenChat} className={s.chats_item}>
      <div className={s.chats_avatar}>
        <img src={avatar} alt={`${firstName || ""} avatar`} />
      </div>
      <div className={s.chats_content}>
        <div className={s.chats_top}>
          <h5>
            {firstName} {lastName}
          </h5>
          <p>{timeSince}</p>
        </div>

        <p
          className={classNames(s.chats_message, {
            [s.chats_message_unread]: messageIsRead,
          })}
        >
          {messageContent}
        </p>
      </div>
      {messageIsRead && <div className={s.chats_dot} />}
    </button>
  );
}
