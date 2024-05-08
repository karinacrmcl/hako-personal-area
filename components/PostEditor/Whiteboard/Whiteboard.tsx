import React, { useState } from "react";
import s from "./Whiteboard.module.scss";
import dynamic from "next/dynamic";
import { Button } from "../../UI/Button/Button";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";
import { ImportedDataState } from "@excalidraw/excalidraw/types/data/types";
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);

let exportToSvg;

(async () => {
  const excalidrawModule = await import("@excalidraw/excalidraw");
  exportToSvg = excalidrawModule.exportToSvg;
})();

const options = {
  welcomeScreen: false,
};

const initialData: ImportedDataState = {
  elements: [],
  appState: { viewBackgroundColor: "#ffffff", currentItemFontFamily: 1 },
  scrollToContent: true,
};

export default function Whiteboard() {
  const { setDrawingSvg, setPostEditorState } = usePostContext();
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  const handleSaveThePicture = async () => {
    const svg = await exportToSvg({
      elements: excalidrawAPI.getSceneElements(),
      appState: {
        ...initialData.appState,
      },
    });
    console.log(svg);
    setDrawingSvg(svg);
    setPostEditorState("initial");
  };

  return (
    <div style={{ width: "100%", height: "100%" }} className={s.container}>
      <Excalidraw
        excalidrawAPI={(api) => {
          setExcalidrawAPI(api);
        }}
        UIOptions={options}
        initialData={initialData}
      />
      <Button type="filled" className={s.button} onClick={handleSaveThePicture}>
        Save the drawing
      </Button>
    </div>
  );
}
