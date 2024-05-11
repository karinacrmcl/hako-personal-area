import React from "react";
import s from "./MediaBar.module.scss";
import MediaButton from "./MediaButton/MediaButton";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";
import useMedia from "../Uploaded/useMedia";

export default function MediaBar() {
  const { setPostEditorState } = usePostContext();
  const { handleAddFile } = useMedia();

  const handleAddPhoto = () => setPostEditorState("photos");
  const handleAddVideo = () => {};
  const handleAddCanvas = () => {
    setPostEditorState("whiteboard");
  };

  return (
    <div className={s.container}>
      <MediaButton icon="photo" onClick={handleAddPhoto} />
      <MediaButton icon="video" onClick={handleAddVideo} />
      <MediaButton icon="file" onClick={() => null}>
        <input type="file" className={s.file_input} onChange={handleAddFile} />
      </MediaButton>
      <MediaButton icon="canvas" onClick={handleAddCanvas} />
    </div>
  );
}
