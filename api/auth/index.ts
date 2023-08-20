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
    return response;
  } catch (err) {
    return err;
  }
};

export const GoogleSignInAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

// export const GoogleSignUpAPI = () => {
//   try {
//     let googleProvider = new GoogleAuthProvider();
//     let res = signUpWithPopu(auth, googleProvider);
//     return res;
//   } catch (err) {
//     return err;
//   }
// };

export const signout = () => {
  try {
    signOut(auth);
  } catch (err) {
    return err;
  }
};
