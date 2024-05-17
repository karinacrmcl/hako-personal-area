import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { app, firestore } from "../../firebase/config";
import { CommentObject, PostObject } from "../../@types/common/PostContent";

//Now import this
import "firebase/firestore";
import { toast } from "react-toastify";

const storage = getStorage();
const publicationsRef = collection(firestore, "publications");
const commentsRef = collection(firestore, "comments");

export const getPublications = async () => {
  try {
    const collectionRef = collection(firestore, "publications");
    const data: any = [];
    await getDocs(collectionRef).then((d) => {
      d.forEach((doc) => {
        // Push each document data to the array
        data.push({ id: doc.id, ...doc.data() });
      });
    });
    return data;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error; // Re-throw the error to handle it outside of this function if needed
  }
};

export const updatePost = async (post: PostObject) => {
  await updateDoc(doc(publicationsRef, post.id), post);
};

export const deletePost = async (id: string) => {
  await deleteDoc(doc(firestore, "publications", id));
};

export const getPostById = async (postId: string) => {
  const snap = await getDoc(doc(firestore, "publications", postId));

  if (snap.exists()) {
    return snap.data();
  } else {
    console.log("No such document");
  }
};

export const getCommentsByPostId = async (postId: string) => {
  const q = query(commentsRef, where("postId", "==", postId));

  const querySnapshot = await getDocs(q);
  const data: Partial<CommentObject>[] = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    data.push(doc.data());
  });
  return data;
};

export const deleteComment = async (id: string) => {
  try {
    await deleteDoc(doc(firestore, "comments", id));
  } catch (e) {
    console.log(e);
    toast.error(
      "An error ocurred while removing the comment. Please try again."
    );
  }
  toast.success("The comment was removed.");
};

export const updateComment = async (comment: CommentObject) => {
  await updateDoc(doc(publicationsRef, comment.id), comment);
};
