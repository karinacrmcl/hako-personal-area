import { getAuth, onAuthStateChanged } from "firebase/auth";
import useAppNavigation from "../../context/navigation/NavigatonContext";
import { app } from "../../firebase/config";
import { useEffect } from "react";

type Props = {
  children: JSX.Element;
};
const auth = getAuth(app);

export function PrivateLayout({ children }: Props) {
  const { goToSignUp } = useAppNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      // @ts-ignore
      if (!res?.accessToken) {
        goToSignUp();
      } else {
        null;
      }
    });
  }, []);

  return children;
}
