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
import "firebase/firestore";

const storage = getStorage();
const publicationsRef = collection(firestore, "publications");
const commentsRef = collection(firestore, "comments");

export const getPublications = async () => {
  try {
    const collectionRef = collection(firestore, "publications");
    const data: any = [];
    await getDocs(collectionRef).then((d) => {
      d.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
    });
    return data as PostObject[];
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
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
    return snap.data() as PostObject;
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

export const getCommentById = async (id: string) => {
  const snap = await getDoc(doc(firestore, "comments", id));

  if (snap.exists()) {
    return snap.data() as CommentObject;
  } else {
    console.log("No such document");
  }
};

export const deleteComment = async (id: string) => {
  await deleteDoc(doc(firestore, "comments", id));
};

export const updateComment = async (comment: CommentObject) => {
  await updateDoc(doc(commentsRef, comment.id), comment);
};
