import React from "react";
import { usePostContext } from "../../../../../context/post-editor/PostEditorContext";
import { formatFileSize } from "../../../../../utils/helpers/formatFileSize";
import { Button } from "../../../../UI/Button/Button";
import { UISvgSelector } from "../../../../UI/UISvgSelector";
import useMedia from "../useMedia";
import s from "./FilesPreview.module.scss";

type Props = {};

export default function FilesPreview({}: Props) {
  const { files } = usePostContext();
  const { handleAddFile, handleRemoveFile } = useMedia();

  if (!files.length) return null;

  return (
    <div className={s.container}>
      {files.map((f, i) => (
        <div key={`${f.name}${i}`} className={s.item}>
          <Button
            type="small"
            onClick={() => handleRemoveFile(f.name)}
            className={s.remove}
          >
            <UISvgSelector id="remove" />
          </Button>
          <UISvgSelector id="file" />
          <div className={s.content}>
            <p>{f.name}</p>
            <span>{formatFileSize(f.size)}</span>
          </div>
        </div>
      ))}
      <Button className={s.add} type="small" onClick={() => null}>
        <input type="file" onChange={handleAddFile} />
        <p>+</p>
      </Button>
    </div>
  );
}
