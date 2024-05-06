import React from "react";
import s from "./Whiteboard.module.scss";
import dynamic from "next/dynamic";
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);
export default function Whiteboard() {
  return (
    // <div className={s.container}>
    <Excalidraw />
    // </div>
  );
}
