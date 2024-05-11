import React from "react";
import useMedia from "../useMedia";
import s from "./DragAndDropArea.module.scss";

export default function DragAndDropArea() {
  const { handleAddPhoto } = useMedia();

  return (
    <input
      className={s.container}
      type="file"
      onChange={handleAddPhoto}
      onClick={(e) => e.preventDefault()}
    />
  );
}
