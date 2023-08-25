import React, { ForwardedRef, ReactNode, useRef } from "react";
import s from "./Dropdown.module.scss";
import classNames from "classnames";
import { useOutsideCheck } from "../../../hooks/useOutsideClick";

type DropdownItem = {
  name: string;
  icon?: ReactNode;
  func: () => void;
};

type Props = {
  items: DropdownItem[];
  open: boolean;
  onOpen: (b: boolean) => void;
  dropdownRef: any;
};

export default function Dropdown({ items, open, dropdownRef }: Props) {
  return (
    <div className={s.attach}>
      <div
        ref={dropdownRef}
        className={classNames(s.container, { [s.container_open]: open })}
      >
        {items.map((item) => {
          return (
            <button className={s.item} key={item.name} onClick={item.func}>
              {item.icon} {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
