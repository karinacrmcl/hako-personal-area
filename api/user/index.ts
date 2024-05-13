import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
  getDocs,
  getFirestore,
  documentId,
  getDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { app, firestore } from "../../firebase/config";
import { SignUpDto } from "../../@types/dto/SignUpDto";
import { User } from "../../@types/entities/User";
import { PostContent, PostObject } from "../../@types/common/PostContent";

const userRef = collection(firestore, "users");
const publicationsRef = collection(firestore, "publications");

export const postUserData = async (object: Partial<User>) => {
  addDoc(userRef, object)
    .then((docRef) => {
      updateDoc(doc(firestore, "users", docRef.id), {
        ...object,
        id: docRef.id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// TODO: change type
export const addUserPost = async (post: PostObject) => {
  const docRef = await addDoc(publicationsRef, post);

  const referenceNumber = docRef.id;

  const postWithReferenceNumber = { ...post, id: referenceNumber };

  await updateDoc(
    doc(firestore, "publications", referenceNumber),
    postWithReferenceNumber
  );

  return postWithReferenceNumber;
};

export const updatePost = async (post: PostObject) => {
  await updateDoc(doc(publicationsRef, post.id), post);
};

export const getPostById = async (postId: string) => {
  const snap = await getDoc(doc(firestore, "publications", postId));

  if (snap.exists()) {
    return snap.data();
  } else {
    console.log("No such document");
  }
};

export const getUserById = async (userId: string) => {
  const snap = await getDoc(doc(firestore, "users", userId));

  if (snap.exists()) {
    return snap.data();
  } else {
    console.log("No such document");
  }
};
