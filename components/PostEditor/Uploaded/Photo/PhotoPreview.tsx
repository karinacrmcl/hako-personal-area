import React, { ChangeEvent } from "react";
import s from "./PhotoPreview.module.scss";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";

type Props = {};

export default function PhotoPreview({}: Props) {
  const { photos, setPhotos } = usePostContext();

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

  return <div className={s.container}> </div>;
}
