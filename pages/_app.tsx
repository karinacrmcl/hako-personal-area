import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import NavigationProvider from "../context/navigation/NavigationProvider";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "../context/user/UserProvider";
import { AnimationProvider } from "../context/animation/AnimationProvider";
import { PostEditorProvider } from "../context/post-editor/PostEditorProvider";

const DynamicNavigationProvider = dynamic(
  () => import("../context/navigation/NavigationProvider"),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicNavigationProvider>
      <UserProvider>
        <AnimationProvider>
          <PostEditorProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </PostEditorProvider>
        </AnimationProvider>
      </UserProvider>
    </DynamicNavigationProvider>
  );
}

export default wrapper.withRedux(MyApp);
