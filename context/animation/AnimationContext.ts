import React, { createContext, useContext } from "react";

export type Animation = {
  name: string;
  time: number;
  target: string;
};

export type AnimationContextType = {
  activeAnimation: string | null;
  inactiveAnimation: string | null;
  setActiveAnimation: (s: string) => void;
  setInactiveAnimation: (s: string) => void;
};

export const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimationContext must be used within a PostProvider");
  }
  return context;
};
