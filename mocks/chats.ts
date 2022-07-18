import { user } from "./user";

const date = new Date("2022-07-16");

export const chats = [
  {
    author: user,
    message: { content: "Something about exploring", sentAt: date },
    messageIsRead: true,
    id: 234,
  },
  {
    author: user,
    message: {
      content: "Do I look like I care what to write here omg ",
      sentAt: date,
    },
    messageIsRead: false,
    id: 235,
  },
];
