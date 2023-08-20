/* eslint-disable react-hooks/exhaustive-deps */
import { NextRouter, useRouter } from "next/router";
import React, { ReactNode, useCallback, useEffect, useMemo } from "react";
import { Path } from "../../constants/routes";
import { AppNavigationCtx, Navigation } from "./NavigatonContext";

type Props = { children: ReactNode };

function NavigationProvider({ children }: Props) {
  const router = useRouter() as NextRouter | null;

  const goBack = useCallback(() => router?.back(), []);
  const goToHome = useCallback(() => router?.push(Path.HOME), []);
  const goToSignUp = useCallback(() => router?.push(Path.SIGN_UP), []);
  const goToSignIn = useCallback(() => router?.push(Path.SIGN_IN), []);

  const navigation = useMemo<Navigation>(
    () => ({
      goBack,
      goToHome,
      goToSignUp,
      goToSignIn,
      pathname: router?.pathname || "",
      query: router?.query || {},
      isReady: !!router?.isReady,
    }),
    [router?.pathname, router?.query, router?.isReady]
  );

  return (
    <AppNavigationCtx.Provider value={navigation}>
      {children}
    </AppNavigationCtx.Provider>
  );
}

export default NavigationProvider;
