import React, { ReactNode, useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/config";
import {
  DocumentData,
  collection,
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
  const [currentUser, setCurrentUser] = useState<User | DocumentData | null>(
    null
  );

  console.log('currentUser',currentUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const singleUserQuery = query(userRef, where("userID", "==", user.uid));
        const unsubscribeSnapshot = onSnapshot(
          singleUserQuery,
          (querySnapshot) => {
            const userData = querySnapshot.docs.map((doc) => doc.data())[0];
            setCurrentUser(userData);
          }
        );

        return () => {
          unsubscribeSnapshot();
        };
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user: currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
