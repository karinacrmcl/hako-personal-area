import { NextRouter } from "next/router";
import React, { useContext } from "react";

export type Navigation = Pick<NextRouter, "pathname" | "query" | "isReady"> & {
  goBack: () => void;
  goToHome: () => void;
  goToSignUp: () => void;
  goToSignIn: () => void;
};

export const AppNavigationCtx = React.createContext({} as Navigation);

const useAppNavigation = () => {
  const appNavigation = useContext(AppNavigationCtx);

  if (typeof appNavigation === "undefined") {
    throw Error("Use useAppNavigation() inside <NavigationProvider>");
  }

  return appNavigation;
};

export default useAppNavigation;
