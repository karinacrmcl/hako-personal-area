import classNames from "classnames";
import CategorySelect from "../CategorySelect/CategorySelect";
import s from "./Footer.module.scss";

import React from "react";
import useAddPublication from "../../hooks/useAddPublication";
import { getCharCount } from "../../utils/getCharCount";
import { Button } from "../../../UI/Button/Button";

type Props = {
  value: { type: string; children: { text: string }[] }[];
  maxLength: number;
  characters: number;
};

export default function Footer({ value, maxLength, characters }: Props) {
  const { handlePost } = useAddPublication();

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
          <Button onClick={handlePost} type="filled" className={s.button}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
