import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import s from "./Input.module.scss";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
};

export default function Input({ label, name, placeholder, value }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value || ""}
      render={({ field: { ref, ...rest } }) => (
        <div className={s.input_container}>
          <label className={s.input_label}>{label}</label>
          <input name={name} placeholder={placeholder} value={value} />
        </div>
      )}
    />
  );
}
