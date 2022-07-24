import { Post } from "./Post";

export type User = {
  id: number;
  username: string;
  fullName: string;
  email: string;
  avatar: string;
  location: string;
  following: User[] | null;
  followers: User[] | null;
  posts: Post[] | null;
  pinned: Post[] | null;
};
