import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { User } from "../../@types/entities/User";
import { baseApi } from "./baseApi";
import { firestore } from "../../firebase/config";

const userRef = collection(firestore, "users");

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<any, string>({
      async queryFn(userId: string) {
        try {
          const q = query(userRef, where("userID", "==", userId));

          const querySnapshot = await getDocs(q);
          const data: Partial<User>[] = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            data.push(doc.data());
          });

          return { data: data[0] || {} };
        } catch (error: any) {
          return { error: error.message || "error" };
        }

        // const docRef = doc(firestore, "users", userId);
        // const snapshot = await getDoc(docRef);
        // console.log("MOOOOO", snapshot.data())
        // return { data: snapshot.data() };
      },
      providesTags: ["User"],
    }),
    getFriendSuggestions: builder.query<any, void>({
      async queryFn() {
        try {
          const data: any = [];
          const querySnapshot = await getDocs(
            query(collection(firestore, "users"), limit(5))
          );

          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });

          return { data } as { data: User[] };
        } catch (error: any) {
          console.error("Error fetching friend suggestions:", error);
          return { error: error?.message || "error" };
        }
      },
      providesTags: [{ type: "User", id: "LIST" as const }],
    }),
    // handleFollowing: builder.mutation({
    //   async queryFn(currentUser: User, followedUser: User) {
    // TODO; finish up
    //     try {
    //       await updateDoc(
    //         doc(firestore, "users", currentUser.userID),
    //         currentUser
    //       );
    //       await updateDoc(
    //         doc(firestore, "users", followedUser.userID),
    //         followedUser
    //       );
    //       return { data: null };
    //     } catch (error: any) {
    //       console.error(error.message);
    //       return { error: error.message };
    //     }
    //   },
    //   invalidatesTags: ["Publications", "Comments"],
    // }),
    // postUserData: builder.mutation({
    //   async queryFn({  }) {
    // try {
    //   await updateDoc(doc(firestore, "scoresTables", scoresTableId), {
    //     scores: arrayUnion(newHighScore),
    //   });
    //   return { data: null };
    // } catch (error: any) {
    //   console.error(error.message);
    //   return { error: error.message };
    // }
    // },
    // invalidatesTags: [""],
    // })
  }),
});

export const { useGetUserByIdQuery, useGetFriendSuggestionsQuery } = userApi;
