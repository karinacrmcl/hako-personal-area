import { imgSizes } from "../../constants/gallery";

export function getImageSize(count: number) {
  switch (true) {
    case count <= 1:
      return imgSizes[1];
    case count <= 2:
      return imgSizes[2];
    case count >= 3:
      return imgSizes[3];
    default:
      return imgSizes.default;
  }
}
