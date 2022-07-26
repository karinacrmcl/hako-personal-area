import React from "react";
import Input from "../../UI/Input/Input";
import s from "./Forms.module.scss";

type Props = {};

export default function SignUp({}: Props) {
  return (
    <div className={s.form_container}>
      <h2 className={s.form_title}>Welcome</h2>
      <h4 className={s.form_description}>Welcome! Please create an account.</h4>
      <Input label="Username" name="username" />
    </div>
  );
}
