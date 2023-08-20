import React, {
  CSSProperties,
  ClipboardEventHandler,
  FocusEventHandler,
  FormEventHandler,
  ReactNode,
} from "react";
import { Controller, useFormContext } from "react-hook-form";
import s from "./Input.module.scss";

type Props = {
  name: string;
  value?: string;
  placeholder?: string;
  label?: string;
  labelInfoTitle?: string;
  labelInfoText?: string;
  type?: string;
  icon?: ReactNode;
  styles?: CSSProperties;
  containerStyles?: CSSProperties;
  error?: string;
  disabled?: boolean;
  optional?: boolean;
  classAdd?: string;
  onChange?: FormEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onPaste?: ClipboardEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  focus?: boolean;
  ref?: (inputElement: HTMLElement) => void;
};

export default function Input({
  name,
  value,
  placeholder,
  label,
  ...props
}: Props) {
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
        <InputUI
          {...props}
          {...rest}
          ref={ref}
          name={name}
          value={value}
          placeholder={placeholder}
          label={label}
          error={errors[name]?.message?.toString()}
        />
      )}
    />
  );
}

const InputUI = ({
  name,
  value,
  placeholder,
  label,
  error,
  ref,
  ...props
}: Props) => {
  return (
    <div className={s.input_container}>
      <label className={s.input_label}>{label}</label>
      <input {...props} name={name} placeholder={placeholder} value={value} />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
