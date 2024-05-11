import React from "react";
import { uploadFileToFirestoreStorage } from "../../../api/storage";
import { addUserPost } from "../../../api/user";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";
import { useUser } from "../../../context/user/UserContext";

export default function useAddPublication() {
  const { postCategory, photos, files, drawing, postEditorValue } =
    usePostContext();
  const { user } = useUser();

  const handlePost = async () => {
    // Upload each photo and get their download URLs
    const uploadedPhotoURLs = await Promise.all(
      photos.map(async (photo) => {
        const fileName = `${Date.now()}_${Math.random()
          .toString(36)
          .substring(2)}`;
        try {
          const downloadURL = await uploadFileToFirestoreStorage(
            photo.file,
            `photos/${fileName}`
          );
          console.log(downloadURL, "downloadurl");
          return downloadURL;
        } catch (error) {
          console.error("Error uploading photo:", error);
          return null;
        }
      })
    );

    const uploadedFileURLs = await Promise.all(
      files.map(async (f) => {
        const fileName = `${Date.now()}_${Math.random()
          .toString(36)
          .substring(2)}`;
        try {
          const downloadURL = await uploadFileToFirestoreStorage(
            f.file,
            `files/${fileName}`
          );
          console.log(downloadURL, "downloadurl");
          return downloadURL;
        } catch (error) {
          console.error("Error uploading file:", error);
          return null;
        }
      })
    );

    // Add the download URLs to the postObject
    const photosArr = uploadedPhotoURLs.filter((url) => url !== null);
    const filesArr = uploadedFileURLs.filter((url) => url !== null);

    // Assuming value, drawing, user, and postCategory are defined elsewhere
    const postObject = {
      userID: user?.userID || "",
      content: JSON.stringify(postEditorValue),
      drawing: drawing
        ? {
            rawData: JSON.stringify(drawing?.data),
            svg: drawing?.svg?.outerHTML,
          }
        : {},
      photos: photosArr,
      files: filesArr,
      postCategory,
    };
    // Add the postObject to Firestore
    await addUserPost(postObject);
  };

  return { handlePost };
}
