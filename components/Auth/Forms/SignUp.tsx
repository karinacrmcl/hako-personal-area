import React from "react";
import {
  goToForgotPassword,
  goToSignIn,
} from "../../../utils/helpers/routerFunctions";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { ServiceButton } from "../../UI/ServiceButton/ServiceButton";
import s from "./Forms.module.scss";

type Props = {};

export default function SignUp({}: Props) {
  const signUpHandler = () => {};

  return (
    <div className={s.form_container}>
      <h2 className={s.form_title}>Welcome</h2>
      <h4 className={s.form_description}>Welcome! Please create an account.</h4>

      <Input
        label="Username"
        name="username"
        placeholder="Enter your username"
      />
      <Input label="Email" name="email" placeholder="Enter your email" />
      <Input label="Password" name="password" placeholder="•••••••••••••••" />

      <Button type="filled" onClick={signUpHandler}>
        Sign up
      </Button>
      <ServiceButton name="google">Sign up with Google</ServiceButton>

      <div className={s.form_bottomtext}>
        <p className={s.form_bottomtext}>Already have an account?</p>
        <button className={s.form_actionbtn} onClick={goToSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}
