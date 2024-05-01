import React from "react";
import { User } from "../../../@types/entities/User";
import Block from "../../../layouts/Block/Block";
import { UISvgSelector } from "../../UI/UISvgSelector";
import s from "./LatestChats.module.scss";
import { LatestChatsItem } from "./LatestChatsItem";

type Message = {
  content: string;
  sentAt: Date;
};

export type Chat = {
  author: User;
  message: Message;
  messageIsRead: boolean;
  id: number;
};

type Props = { chats: Chat[] };

export default function LatestChats({ chats }: Props) {
  return (
    <Block
      title="Latest chats"
      titleAsset={<UISvgSelector id="message" />}
      styles={{ height: "260px" }}
      className={s.wrapper}
    >
      <div className={s.chats_container}>
        {chats.map((item: Chat) => {
          return (
            <LatestChatsItem
              key={item.id}
              item={item}
              onOpenChat={() => console.log()}
            />
          );
        })}
      </div>
    </Block>
  );
}
