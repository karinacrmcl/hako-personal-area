import React, { ChangeEvent } from "react";
import s from "./Photo.module.scss";
import { UISvgSelector } from "../../../UI/UISvgSelector";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";
import { Button } from "../../../UI/Button/Button";

type Props = {};

export default function PhotosUpload({}: Props) {
  const { photos, setPhotos, setPostEditorState } = usePostContext();

  const handleAddPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const photoObj = {
        path: URL.createObjectURL(e?.target?.files?.[0]),
        name: e.target.value,
      };
      setPhotos([...photos, photoObj]);
    }
  };

  const handleRemovePhoto = (n: string) => {
    setPhotos(photos.filter((p) => p.name !== n));
  };

  return (
    <div className={s.container}>
      <Button
        type="small"
        onClick={() => setPostEditorState("initial")}
        className={s.back}
      >
        <UISvgSelector id="back" /> Back
      </Button>
      <div className={s.upload_button}>
        <input type="file" className={s.input} onChange={handleAddPhoto} />
        <UISvgSelector id="photo-upload" />
        <p>Click or drag and drop here</p>
      </div>

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
