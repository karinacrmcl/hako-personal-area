import { getAuth, onAuthStateChanged } from "firebase/auth";
import useAppNavigation from "../../context/navigation/NavigatonContext";
import { app } from "../../firebase/config";
import { useEffect } from "react";

type Props = {
  children: JSX.Element;
};
const auth = getAuth(app);

export function PublicLayout({ children }: Props): JSX.Element {
  const { goToHome } = useAppNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      // @ts-ignore
      if (res?.accessToken) {
        console.log(res?.accessToken);
        goToHome();
      } else {
        null;
      }
    });
  }, []);

  return children;
}
