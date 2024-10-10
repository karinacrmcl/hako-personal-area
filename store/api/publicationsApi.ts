import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { User } from "../../@types/entities/User";
import { baseApi } from "./baseApi";
import { firestore } from "../../firebase/config";
import { CommentObject, PostObject } from "../../@types/common/PostContent";


const publicationsRef = collection(firestore, "publications");
const commentsRef = collection(firestore, "comments");

export const publicationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPublications: builder.query<any, void>({
            async queryFn() {
                try {
                   
                    const data: any = [];
                    await getDocs(publicationsRef).then((d) => {
                      d.forEach((doc) => {
                        data.push({ id: doc.id, ...doc.data() });
                      });
                    });
                    return {data} as {data: PostObject[]};
                  } catch (error: any) {
                    console.error("Error getting documents: ", error);
                    return { error: error?.message || 'error' };
                }
            },
            providesTags: [{ type: "Publications", id: "LIST" as const }],
          }),
          getPublicationById: builder.query<any, string>({
            async queryFn(id: string) {
                try {
                  const snap = await getDoc(doc(firestore, "publications", id));
                    return {data: snap.data()} as {data: PostObject};
                  } catch (error: any) {
                    console.error("Error getting documents: ", error);
                    return { error: error?.message || 'error' };
                }
            },
            providesTags: [{ type: "Publications", id: "LIST" as const }],
          }),
          getCommentsByPostId: builder.query<any, string>({
            async queryFn(id: string) {
                try {
                  const q = query(commentsRef, where("postId", "==", id));

  const querySnapshot = await getDocs(q);
  const data: Partial<CommentObject>[] = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    data.push(doc.data());
  });
  return {data};
                  } catch (error: any) {
                    console.error("Error getting documents: ", error);
                    return { error: error?.message || 'error' };
                }
            },
            providesTags: [{ type: "Comments", id: "LIST" as const }],
          }),
          postComment: builder.mutation({
            async queryFn(comment: CommentObject ) {
              try {
                const docRef = await addDoc(commentsRef, comment);

                const referenceNumber = docRef.id;
              
                const commentWithReferenceNumber = { ...comment, id: referenceNumber };
              
                await updateDoc(
                  doc(firestore, "comments", referenceNumber),
                  commentWithReferenceNumber
                );
              
                return {data: commentWithReferenceNumber};
              } catch (error: any) {
                console.error(error.message);
                return { error: error.message };
              }
            },
            invalidatesTags: ['Comments']
            // (result) =>
          //       result ? [{ type: "Publications", id: result.id || "" }] : [],
          }),
                  updatePost: builder.mutation({
            async queryFn(post: PostObject ) {
              try {
               const postUpd = await updateDoc(doc(publicationsRef, post.id), post);
                return { data: postUpd };
              } catch (error: any) {
                console.error(error.message);
                return { error: error.message };
              }
            },
            invalidatesTags: ['Publications']
            // (result) =>
          //       result ? [{ type: "Publications", id: result.id || "" }] : [],
          }),
          deletePost: builder.mutation({
            async queryFn(id: string ) {
              try {
               const postUpd = await deleteDoc(doc(firestore, "publications", id));
                return { data: postUpd };
              } catch (error: any) {
                console.error(error.message);
                return { error: error.message };
              }
            },
            invalidatesTags: ['Publications']
            // (result) =>
          //       result ? [{ type: "Publications", id: result.id || "" }] : [],
          })


    }),
})

export const {useGetPublicationsQuery, useGetCommentsByPostIdQuery, useGetPublicationByIdQuery, useUpdatePostMutation, useDeletePostMutation, usePostCommentMutation} = publicationsApi;