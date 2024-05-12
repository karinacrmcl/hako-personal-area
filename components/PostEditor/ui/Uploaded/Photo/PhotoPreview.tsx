import React from "react";
import s from "./PhotoPreview.module.scss";
import { usePostContext } from "../../../../../context/post-editor/PostEditorContext";
import { Button } from "../../../../UI/Button/Button";
import { UISvgSelector } from "../../../../UI/UISvgSelector";
import useMedia from "../useMedia";

export default function PhotoPreview() {
  const { photos } = usePostContext();
  const { handleRemovePhoto, handleAddPhoto, addPhotoAvailable } = useMedia();

  if (!photos.length) return null;

  return (
    <div className={s.container}>
      {photos.map((ph, i) => {
        return (
          <div className={s.item} key={`${ph.name}${i}`}>
            <Button
              type="small"
              onClick={() => handleRemovePhoto(ph.name)}
              className={s.remove}
            >
              <UISvgSelector id="close" />
            </Button>
            <img src={ph.path} alt={ph.name} />
          </div>
        );
      })}
      {addPhotoAvailable && (
        <Button className={s.add} type="small" onClick={() => null}>
          <input type="file" onChange={handleAddPhoto} />
          <p>+</p>
        </Button>
      )}
    </div>
  );
}
