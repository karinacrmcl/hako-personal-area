import React, { useState } from "react";
import s from "./Whiteboard.module.scss";
import dynamic from "next/dynamic";
import { Button } from "../../../UI/Button/Button";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";
import { ImportedDataState } from "@excalidraw/excalidraw/types/data/types";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);

let exportToSvg: any;
if (typeof window !== "undefined") {
  (async () => {
    exportToSvg = (await import("@excalidraw/excalidraw")).exportToSvg;
  })();
}

// (async () => {
//   const excalidrawModule = await import("@excalidraw/excalidraw");
//   exportToSvg = excalidrawModule.exportToSvg;
// })();

const options = {
  welcomeScreen: false,
};

export default function Whiteboard() {
  const { setDrawingSvg, setPostEditorState, drawing } = usePostContext();
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);

  const initialData: ImportedDataState = {
    elements: drawing?.data,
    appState: { viewBackgroundColor: "#ffffff", currentItemFontFamily: 1 },
    scrollToContent: true,
  };

  const handleSaveThePicture = async () => {
    const svg = await exportToSvg({
      elements: excalidrawAPI?.getSceneElements(),
      appState: {
        ...initialData.appState,
      },
    });
    setDrawingSvg({ svg, data: excalidrawAPI?.getSceneElements() });
    setPostEditorState("initial");
  };

  const handleGoBack = () => {
    setPostEditorState("initial");
  };

  return (
    <div className={s.container}>
      <Excalidraw
        excalidrawAPI={(api) => {
          setExcalidrawAPI(api);
        }}
        UIOptions={options}
        initialData={initialData}
      />
      <Button
        type="unfilled"
        className={s.button_secondary}
        onClick={handleGoBack}
      >
        Go Back
      </Button>
      <Button type="filled" className={s.button} onClick={handleSaveThePicture}>
        Save the drawing
      </Button>
    </div>
  );
}
