import React from "react";
import { User } from "../../../@types/entities/User";
import Block from "../../../layouts/Block/Block";
import { UISvgSelector } from "../../UI/UISvgSelector";
import s from "./LatestChats.module.scss";
import { LatestChatsItem } from "./LatestChatsItem";

export type Chat = {
  author: User;
  message: string;
  messageIsRead: boolean;
};

type Props = { chats: Chat[] };

export default function LatestChats({ chats }: Props) {
  return (
    <Block
      title="Latest chats"
      titleAsset={<UISvgSelector id="message" />}
      styles={{ height: "260px" }}
    >
      <div className={s.chats_container}>
        {chats.map((item: Chat) => {
          return (
            <LatestChatsItem item={item} onOpenChat={() => console.log()} />
          );
        })}
      </div>
    </Block>
  );
}
