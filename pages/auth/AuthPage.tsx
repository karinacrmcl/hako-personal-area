import { useRouter } from "next/router";
import React from "react";
import SignIn from "../../components/Auth/Forms/SignIn";
import SignUp from "../../components/Auth/Forms/SignUp";
import { UISvgSelector } from "../../components/UI/UISvgSelector";
import s from "./AuthPage.module.scss";

type Props = {};

function StageForm({ stage }: { stage: string }) {
  switch (stage) {
    case "signin":
      return <SignIn />;
    case "signup":
      return <SignUp />;

    default:
      return null;
  }
}

export function AuthPage({}: Props) {
  // const router = useRouter();

  return (
    <div className={s.auth_container}>
      <div className={s.auth_formside}>
        <StageForm stage="signup" />
      </div>
      <div className={s.auth_logo}>
        <div className={s.auth_logoelem}>
          <UISvgSelector id="logo" />
          <div className={s.auth_logoblur} />
        </div>
      </div>
    </div>
  );
}
