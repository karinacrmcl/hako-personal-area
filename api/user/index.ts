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
import {
  CommentObject,
  PostContent,
  PostObject,
} from "../../@types/common/PostContent";

const userRef = collection(firestore, "users");
const publicationsRef = collection(firestore, "publications");
const commentsRef = collection(firestore, "comments");

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
// TODO: implement adding doc ID the same way as above
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

export const addUserComment = async (comment: CommentObject) => {
  const docRef = await addDoc(commentsRef, comment);

  const referenceNumber = docRef.id;

  const commentWithReferenceNumber = { ...comment, id: referenceNumber };

  await updateDoc(
    doc(firestore, "comments", referenceNumber),
    commentWithReferenceNumber
  );

  return commentWithReferenceNumber;
};

export const getUserById = async (userId: string) => {
  /*   const snap = await getDoc(doc(firestore, "users", userId));

  if (snap.exists()) {
    return snap.data();
  } else {
    console.log("No such document");
  }
 */
  const q = query(userRef, where("userID", "==", userId));

  console.log(userId, "userId");

  const querySnapshot = await getDocs(q);
  const data: Partial<User>[] = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    data.push(doc.data());
  });
  return data;
};
