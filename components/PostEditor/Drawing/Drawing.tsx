import React, { useEffect, useRef } from "react";
import s from "./Drawing.module.scss";
import { usePostContext } from "../../../context/post-editor/PostEditorContext";

const Svg = (svg: SVGSVGElement) => {
  if (!svg) return null;
  return <div className={s.drawing} ref={svg} />;
};

export default function Drawing() {
  const svg = useRef<null | SVGSVGElement>(null);
  const { svgDrawing } = usePostContext();

  if (!svgDrawing) return null;

  useEffect(() => {
    if (svg.current) {
      if (svg.current.firstChild) {
        svg.current.replaceChild(svgDrawing, svg.current.firstChild);
      } else {
        svg.current.appendChild(svgDrawing);
      }
    }
  }, [svgDrawing]);

  return <Svg svg={svg} />;
}
