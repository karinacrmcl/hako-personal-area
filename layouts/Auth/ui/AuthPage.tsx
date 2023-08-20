import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { UISvgSelector } from "../../../components/UI/UISvgSelector";
import s from "./AuthPage.module.scss";

type Props = {
  children: ReactNode;
};

export function AuthPage({ children }: Props) {
  return (
    <div className={s.auth_container}>
      <div className={s.auth_formside}>{children}</div>
      <div className={s.auth_logo}>
        <div className={s.auth_logoelem}>
          <UISvgSelector id="logo" />
          <div className={s.auth_logoblur} />
        </div>
      </div>
    </div>
  );
}
