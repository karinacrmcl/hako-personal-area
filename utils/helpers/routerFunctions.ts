import { useRouter } from "next/router";
import { Path } from "../../constants/routes";

const router = useRouter();

export const goToSignUp = () => {
  router.push(Path.SIGN_UP);
};

export const goToSignIn = () => {
  router.push(Path.SIGN_IN);
};

export const goToHome = () => {
  router.push(Path.HOME);
};

export const goToUser = (id: string) => {
  router.push(Path.PROFILE);
};

export const goToForgotPassword = () => {
  router.push(Path.FORGOT_PASSWORD);
};
