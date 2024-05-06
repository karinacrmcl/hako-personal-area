import React from "react";
import s from "./MediaBar.module.scss";
import MediaButton from "../MediaButton/MediaButton";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";

export default function MediaBar() {
  const { setPostEditorState } = usePostContext();

  const handleAddPhoto = () => {};
  const handleAddVideo = () => {};
  const handleAddFile = () => {};
  const handleAddCanvas = () => {
    setPostEditorState("whiteboard");
  };

  return (
    <div className={s.container}>
      <MediaButton icon="photo" onClick={handleAddPhoto} />
      <MediaButton icon="video" onClick={handleAddVideo} />
      <MediaButton icon="file" onClick={handleAddFile} />
      <MediaButton icon="canvas" onClick={handleAddCanvas} />
    </div>
  );
}
