import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { ServiceButton } from "../../UI/ServiceButton/ServiceButton";
import s from "./Forms.module.scss";
import { SignUpDto } from "../../../@types/dto/SignUpDto";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./signup-validation";

export default function SignUp() {
  const signUpHandler = () => {};
  const values = useForm<SignUpDto>({
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
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
          <Input label="Email" name="email" placeholder="Enter your email" />
          <Input
            label="Password"
            name="password"
            placeholder="•••••••••••••••"
          />
        </div>

        <div className={s.form_buttons}>
          <Button type="filled" onClick={signUpHandler}>
            Sign up
          </Button>
          <ServiceButton name="google">Sign up with Google</ServiceButton>
        </div>
        <div className={s.form_bottomtext}>
          <p className={s.form_bottomtext}>Already have an account?</p>
          <button className={s.form_actionbtn} onClick={() => null}>
            Sign in
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
