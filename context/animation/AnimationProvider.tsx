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

  const value: AnimationContextType = {
    activeAnimation: activeAnimation,
    inactiveAnimation: inactiveAnimation,
    setActiveAnimation: (s: string) => {
      setActiveAnimation(s);
      setInactiveAnimation(null);
    },
    setInactiveAnimation: (s: string) => {
      setInactiveAnimation(s);
      setActiveAnimation(null);
    },
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
