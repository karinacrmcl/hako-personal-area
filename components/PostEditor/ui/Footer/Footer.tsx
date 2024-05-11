import classNames from "classnames";
import CategorySelect from "../CategorySelect/CategorySelect";
import s from "./Footer.module.scss";

import React from "react";
import useAddPublication from "../../hooks/useAddPublication";
import { getCharCount } from "../../utils/getCharCount";
import { Button } from "../../../UI/Button/Button";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";
import { useAnimation } from "../../../../context/animation/AnimationContext";
import { Descendant } from "slate";

type Props = {
  value: Descendant[];
  maxLength: number;
  characters: number;
};

export default function Footer({ value, maxLength, characters }: Props) {
  const { handlePost } = useAddPublication();
  const { setOpen } = usePostContext();
  const { setInactiveAnimation } = useAnimation();

  const handleClose = () => {
    setOpen(false);
    setInactiveAnimation("postinput");
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
            onClick={handleClose}
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
