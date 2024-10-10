import React, { createContext, useContext } from "react";
import { User } from "../../@types/entities/User";
import { DocumentData } from "firebase/firestore";

type UserContextType = {
  user: DocumentData | User | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
console.log(context)
  return context;

};
