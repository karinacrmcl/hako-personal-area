import React, { ReactNode, useState } from "react";
import {
  Animation,
  AnimationContext,
  AnimationContextType,
} from "./AnimationContext";

type PropsProvider = {
  children: ReactNode;
};

export const AnimationProvider = ({ children }: PropsProvider) => {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const [inactiveAnimation, setInactiveAnimation] = useState<string | null>(
    null
  );

  //   const animationSelector = (s: string) => {
  //     switch (s) {
  //       case "openpost":
  //         setActiveAnimation("openpost");

  //       default:
  //         break;
  //     }
  //   };

  const value: AnimationContextType = {
    activeAnimation: activeAnimation,
    inactiveAnimation: inactiveAnimation,
    setActiveAnimation: (s: string) => setActiveAnimation(s),
    setInactiveAnimation: (s: string) => setInactiveAnimation(s),
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
