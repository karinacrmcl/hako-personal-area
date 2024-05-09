import classNames from "classnames";
import CategorySelect from "../CategorySelect/CategorySelect";
import s from "./Footer.module.scss";

import React from "react";
import { Button } from "../../UI/Button/Button";
import { Descendant } from "slate";

type Props = {
  value: Descendant[];
  maxLength: number;
  characters: number;
};

export default function Footer({ value, maxLength, characters }: Props) {
  const getCharCount = (arr: Descendant[]) => {
    return arr?.reduce((total, obj) => {
      return (
        total +
        (obj?.children
          ? obj?.children?.reduce((acc, child) => {
              return acc + (child.text ? child.text.length : 0);
            }, 0)
          : 0)
      );
    }, 0);
  };

  return (
    <div className={s.footer}>
      <CategorySelect />
      <div className={s.footer_data}>
        <p
          className={classNames(s.limit, {
            [s.limit_reached]: getCharCount(value) >= maxLength,
          })}
        >
          {characters} / {maxLength}
        </p>
        <div className={s.footer_buttons}>
          <Button
            onClick={() => console.log(value)}
            type="unfilled"
            className={s.button_secondary}
          >
            Cancel
          </Button>
          <Button
            onClick={() => console.log(value)}
            type="filled"
            className={s.button}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
