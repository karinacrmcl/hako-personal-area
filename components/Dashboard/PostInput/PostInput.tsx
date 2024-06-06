import React, { useState } from "react";
import { User } from "../../../@types/entities/User";
import { PublicationSvgSelector } from "../../Publication/PublicationSvgSelector";
import { Button } from "../../UI/Button/Button";
import s from "./PostInput.module.scss";
import classNames from "classnames";
import { useAnimation } from "../../../context/animation/AnimationContext";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";
import Avatar from "../../Profile/Avatar/Avatar";

type Props = {
  user: User;
};

export function PostInput({ user: { avatar } }: Props) {
  const [expanded, setExpanded] = useState(false);
  const { setActiveAnimation } = useAnimation();
  const { setPostEditorState, setOpen } = usePostContext();

  const expandInputField = () => {
    if (!expanded) {
      setExpanded(true);
    }
    setActiveAnimation("postinput");
    setOpen(true);
  };

  return (
    <div
      className={classNames(s.postinput_container, {
        [s.postinput_expanded]: expanded,
      })}
      onClick={expandInputField}
    >
      <div className={s.postinput_avatar}>
        <Avatar />
      </div>
      <div
        className={classNames(s.postinput_field, {
          [s.postinput_field_expanded]: expanded,
        })}
      >
        <input placeholder="What would you like to post?" />
        <div className={s.postinput_buttons}>
          <Button
            type="small"
            onClick={() => {
              expandInputField();
              setPostEditorState("photos");
            }}
          >
            <PublicationSvgSelector id="video" />
          </Button>
          <Button
            type="small"
            onClick={() => {
              expandInputField();
              setPostEditorState("photos");
            }}
          >
            <PublicationSvgSelector id="picture" />
          </Button>
        </div>
      </div>
    </div>
  );
}
