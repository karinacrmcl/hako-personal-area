import classNames from "classnames";
import React, { useState } from "react";
import s from "./Select.module.scss";
import { UISvgSelector } from "../UISvgSelector";
import { Button } from "../Button/Button";

type SelectOption = {
  name: string;
  label: string;
};
type Props = {
  activeValue: string;
  setActiveValue: (st: string) => void;
  className?: string;
  options: SelectOption[];
};

export default function Select({
  activeValue,
  setActiveValue,
  className,
  options,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((p) => !p)}
      className={classNames(s.container, className)}
    >
      <p>{activeValue}</p>
      <Button
        onClick={() => null}
        type="small"
        className={classNames(s.button, { [s.button_open]: open })}
      >
        <UISvgSelector id="arrow-up" />
      </Button>
      <div className={classNames(s.menu, { [s.menu_open]: open })}>
        {options.map((sl: SelectOption) => (
          <span
            key={sl.name}
            onClick={() => setActiveValue(sl.name)}
            className={s.menu_option}
          >
            {sl.label}
          </span>
        ))}
      </div>
    </div>
  );
}
