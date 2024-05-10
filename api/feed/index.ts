import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app, firestore } from "../../firebase/config";

const storage = getStorage();
const storageRef = ref(storage, "publications");

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
