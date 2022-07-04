import classNames from "classnames";
import { useState } from "react";
import s from "./Sorting.module.scss";

export function Hint() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={s.sorting_hint_container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={classNames(s.sorting_hint, {
          [s.sorting_hint_open]: isOpen,
        })}
      >
        ?
      </button>
      {isOpen && (
        <div className={s.sorting_hint_content}>
          Choose categories you would like to see in your feed.
        </div>
      )}
    </div>
  );
}
