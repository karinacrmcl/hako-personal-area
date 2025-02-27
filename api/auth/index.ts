import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/config";

const auth = getAuth(app);

export const login = (email: string, password: string) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const register = (email: string, password: string) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    console.log("response", response)
    return response;
  } catch (err) {
    return err;
  }
};

export const googlesignin = async () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    return err;
  }
};

export const signout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};
