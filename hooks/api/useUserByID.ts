import React, { useEffect, useState } from "react";
import { getUserById } from "../../api/user";
import { User } from "../../@types/entities/User";

export default function useUserByID(userId: string) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const user = await getUserById(userId);
        // @ts-expect-error api types
        setUser(user);
      } catch (error) {
        console.error("Error fetching publications: ", error);
      }
    };

    fetchAuthor();
  }, []);

  // @ts-expect-error api types
  return user as User;
}
