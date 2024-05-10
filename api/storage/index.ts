import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export async function uploadImageToFirestoreStorage(
  imageFile: File,
  storagePath: string
): Promise<string> {
  try {
    // Create a reference to the storage path
    const storageRef = ref(storage, storagePath);

    // Upload image bytes to the storage path
    const snapshot = await uploadBytes(storageRef, imageFile);

    // Log success message
    console.log("Image uploaded successfully:", snapshot);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);

    // Return the download URL of the uploaded image
    return downloadURL;
  } catch (error) {
    // Handle any errors
    console.error("Error uploading image:", error);
    throw error;
  }
}
