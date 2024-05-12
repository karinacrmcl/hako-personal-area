import React from "react";
import s from "./Photo.module.scss";
import { UISvgSelector } from "../../../../UI/UISvgSelector";
import { usePostContext } from "../../../../../context/post-editor/PostEditorContext";
import { Button } from "../../../../UI/Button/Button";
import useMedia from "../useMedia";

export default function PhotosUpload() {
  const { photos, setPostEditorState } = usePostContext();
  const { handleRemovePhoto, handleAddPhoto, addPhotoAvailable } = useMedia();

  return (
    <div className={s.container}>
      <Button
        type="small"
        onClick={() => setPostEditorState("initial")}
        className={s.back}
      >
        <UISvgSelector id="back" /> Back
      </Button>
      {addPhotoAvailable && (
        <div className={s.upload_button}>
          <input type="file" className={s.input} onChange={handleAddPhoto} />
          <UISvgSelector id="photo-upload" />
          <p>Click or drag and drop here</p>
        </div>
      )}

      <div className={s.list}>
        {photos.map((photo, i) => {
          return (
            <div className={s.photo_item} key={`${photo.name}${i}`}>
              <Button
                type="small"
                onClick={() => handleRemovePhoto(photo.name)}
                className={s.remove}
              >
                <UISvgSelector id="remove" />
              </Button>
              <img src={photo.path} alt={photo.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
