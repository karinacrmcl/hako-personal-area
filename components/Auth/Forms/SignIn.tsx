import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SignInDto } from "../../../@types/dto/SignInDto.dto";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { ServiceButton } from "../../UI/ServiceButton/ServiceButton";
import s from "./Forms.module.scss";
import schema from "./signin-validation";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

export default function SignIn({}: Props) {
  const router = useRouter();
  const signInHandler = () => {};
  const goToForgotPassword = () => {};
  const goToSignUp = () => {};

  const values = useForm<SignInDto>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...values}>
      <div className={s.form_container}>
        <h2 className={s.form_title}>Welcome</h2>
        <h4 className={s.form_description}>
          Welcome! Please create an account.
        </h4>

        <div className={s.form_inputs}>
          <Input label="Email" name="email" placeholder="Enter your email" />
          <Input
            label="Password"
            name="password"
            placeholder="•••••••••••••••"
          />
        </div>
        <div className={s.form_actions}>
          <div className={s.form_checkbox}>
            <input type="checkbox" />
            <p>Don’t remember the user</p>
          </div>
          <button className={s.form_actionbtn} onClick={goToForgotPassword}>
            Forgot password
          </button>
        </div>
        <div className={s.form_buttons}>
          <Button type="filled" onClick={signInHandler}>
            Sign up
          </Button>
          <ServiceButton name="google">Sign up with Google</ServiceButton>
        </div>
        <div className={s.form_bottomtext}>
          <p>Don’t have an account?</p>
          <button className={s.form_actionbtn} onClick={goToSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
