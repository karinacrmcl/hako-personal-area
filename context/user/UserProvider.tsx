import React, { ReactNode, useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/config";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { User } from "../../@types/entities/User";
import { UserContext } from "./UserContext";

type PropsProvider = {
  children: ReactNode;
};

const user = auth.currentUser;
let userRef = collection(firestore, "users");

export const UserProvider = ({ children }: PropsProvider) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      const singleUserQuery = query(userRef, where("userID", "==", user.uid));
      onSnapshot(singleUserQuery, (response) => {
        setCurrentUser(
          // @ts-ignore
          response.docs.map((docs) => {
            return { ...docs.data() };
          })[0]
        );
      });
    } else {
      return undefined;
    }
  }, [user?.uid]);

  return (
    <UserContext.Provider value={{ user: currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
