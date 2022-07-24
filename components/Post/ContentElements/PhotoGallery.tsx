import Image from "next/image";
import React, { useState } from "react";
import { MAX_VISIBLE } from "../../../constants/gallery";
import { getImageSize } from "../../../utils/helpers/getImageSize";
import s from "./ContentElements.module.scss";

export type Photo = {
  previewSrc?: string;
  originalSrc: string;
  id: number;
};

type Props = {
  items: Photo[];
};

type PictureProps = {
  item: Photo;
  count: number;
  order: number;
  size: {
    width: number | string;
    height: number | string;
  };
  isExpanded: boolean;
  setIsExpanded: () => void;
};

function Picture({
  item: { previewSrc, originalSrc },
  size: { width, height },
  isExpanded,
  setIsExpanded,
  count,
  order,
}: PictureProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  let isLastVisible = count > MAX_VISIBLE && order === MAX_VISIBLE - 1;
  const remainingPics = count - MAX_VISIBLE;

  const showAllPictures = () => {
    setIsExpanded();
    isLastVisible = false;
  };

  return (
    <div style={{ width }} className={s.elem_gallery_item}>
      <img
        src={count === 0 ? previewSrc || originalSrc : originalSrc}
        className={s.elem_gallery_previewpicture}
        style={{ height, width }}
        onClick={() => setIsLightboxOpen(!isLightboxOpen)}
      />
      {isLastVisible && !isExpanded && (
        <button className={s.elem_gallery_morebtn} onClick={showAllPictures}>
          <p>+ {remainingPics}</p>
        </button>
      )}
    </div>
  );
}

export default function PostPhotoGallery({ items }: Props) {
  const imagesCount = items.length;
  const size = getImageSize(imagesCount);

  const [isExpanded, setisExpanded] = useState(false);

  const expandHadler = () => {
    setisExpanded(true);
  };

  return (
    <div
      className={s.elem_gallery}
      style={{ height: isExpanded ? "fit-content" : size.height }}
    >
      {items.map((item: Photo, i) => {
        return (
          <Picture
            item={item}
            key={item.id}
            count={imagesCount}
            order={i}
            size={size}
            isExpanded={isExpanded}
            setIsExpanded={expandHadler}
          />
        );
      })}
    </div>
  );
}
