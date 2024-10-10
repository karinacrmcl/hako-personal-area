import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
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

                return { data: data[0] || {}};
              } catch (error: any) {
        
                return { error: error.message || 'error' };
              }

            // const docRef = doc(firestore, "users", userId);
            // const snapshot = await getDoc(docRef);
            // console.log("MOOOOO", snapshot.data())
            // return { data: snapshot.data() };
            },
            providesTags: ["User"],
          }),
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
})

export const {useGetUserByIdQuery} = userApi;