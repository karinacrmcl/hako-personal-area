import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { ServiceButton } from "../../UI/ServiceButton/ServiceButton";
import s from "./Forms.module.scss";
import { SignUpDto } from "../../../@types/dto/SignUpDto";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./signup-validation";
import useAppNavigation from "../../../context/navigation/NavigatonContext";
import { googlesignin, register } from "../../../api/auth";
import { toast } from "react-toastify";
import { postUserData } from "../../../api/user";
import uuid from "react-uuid";
import { getAuthError } from "../../../utils/validation/getAuthError";
import { FirebaseError } from "../../../@types/api/firebase";

export default function SignUp() {
  const { goToHome } = useAppNavigation();

  const signUpHandler = async (data: SignUpDto) => {
    try {
      const res = await register(data.email, data.password);

      postUserData({
        // @ts-ignore
        userID: res.user.uid,
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        location: "Unknown",
      });

      goToHome();
      // @ts-ignore
    } catch (err: any) {
      console.error(err);
      toast.error(getAuthError(err.message || "An error occurred."));
    }
  };

  const values = useForm<SignUpDto>({
    resolver: yupResolver(schema),
  });
  const { goToSignIn } = useAppNavigation();

  return (
    <FormProvider {...values}>
      <div className={s.form_container}>
        <h2 className={s.form_title}>Welcome</h2>
        <h4 className={s.form_description}>
          Welcome! Please create an account.
        </h4>

        <form
          className={s.form_inputs}
          onSubmit={values.handleSubmit(signUpHandler)}
        >
          <Input
            label="First name"
            name="firstName"
            placeholder="Enter your first name"
          />
          <Input
            label="Last name"
            name="lastName"
            placeholder="Enter your last name"
          />
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
            type="password"
          />
        </form>

        <div className={s.form_buttons}>
          <Button type="filled" onClick={values.handleSubmit(signUpHandler)}>
            Sign up
          </Button>
          <ServiceButton onClick={googlesignin} name="google">
            Sign up with Google
          </ServiceButton>
        </div>
        <div className={s.form_bottomtext}>
          <p className={s.form_bottomtext}>Already have an account?</p>
          <button className={s.form_actionbtn} onClick={goToSignIn}>
            Sign in
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
