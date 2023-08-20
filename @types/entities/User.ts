import { Post } from "./Post";

export type User = {
  userID: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  location: string;
  following: string[] | null;
  followers: string[] | null;
  posts: Post[] | null;
  pinned: Post[] | null;
};
