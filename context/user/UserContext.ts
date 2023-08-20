import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebase/config";
import { User } from "../../@types/entities/User";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
