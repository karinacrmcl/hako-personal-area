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
} from "firebase/firestore";
import { toast } from "react-toastify";
import { app, firestore } from "../../firebase/config";
import { SignUpDto } from "../../@types/dto/SignUpDto";
import { User } from "../../@types/entities/User";

const userRef = collection(firestore, "users");

export const postUserData = async (object: Partial<User>) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

// TODO: change type
export const addUserPost = async (post: any) => {
  console.log(post);
  await addDoc(collection(firestore, "publications"), post);
};

// export const users = async () => {
//   const querySnapshot = await getDocs(userRef);

//   querySnapshot.forEach((doc) => {
//     console.log("Document data:", doc.data());
//   });
// };
