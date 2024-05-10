import React, { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";

const UPLOAD_LIMIT_PHOTO = 10;
const UPLOAD_LIMIT_FILE = 5;

export default function useMedia() {
  const { photos, setPhotos, files, setFiles } = usePostContext();

  const handleAddPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (!file) {
      toast.error(
        "An error occured while trying to upload the file. Please try again."
      );
      return;
    }

    if (photos.length >= UPLOAD_LIMIT_PHOTO) {
      toast.error("Maximum upload limit is reached.");
      return;
    }

    if (file.type?.split("/")[0] !== "image") {
      toast.error("This format is not supported. Please upload the image.");
      return;
    }

    const photoObj = {
      path: URL.createObjectURL(file),
      name: e.target.value,
      size: file.size,
      file,
    };
    setPhotos([...photos, photoObj]);
  };

  const handleRemovePhoto = (n: string) => {
    setPhotos(photos.filter((p) => p.name !== n));
  };

  const handleAddFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (!file) {
      toast.error(
        "An error occured while trying to upload the file. Please try again."
      );
      return;
    }

    if (photos.length >= UPLOAD_LIMIT_FILE) {
      toast.error("Maximum upload limit is reached.");
      return;
    }

    if (
      file.type?.split("/")[0] === "image" ||
      file.type?.split("/")[0] === "video"
    ) {
      toast.error("This format is not supported. Please upload the image.");
      return;
    }

    const fileObj = {
      path: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      file,
    };
    setFiles([...files, fileObj]);
  };

  const handleRemoveFile = (n: string) => {
    setFiles(files.filter((p) => p.name !== n));
  };

  return { handleAddPhoto, handleRemovePhoto, handleAddFile, handleRemoveFile };
}
