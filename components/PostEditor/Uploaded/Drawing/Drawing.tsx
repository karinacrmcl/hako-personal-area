import React, { useEffect, useRef } from "react";
import s from "./Drawing.module.scss";
import { usePostContext } from "../../../../context/post-editor/PostEditorContext";
import { Button } from "../../../UI/Button/Button";
import { UISvgSelector } from "../../../UI/UISvgSelector";

export default function Drawing() {
  const svg = useRef<null | SVGSVGElement>(null);
  const { setDrawingSvg, drawing, setPostEditorState } = usePostContext();

  useEffect(() => {
    if (svg.current && drawing?.svg) {
      if (svg.current.firstChild) {
        svg.current.replaceChild(drawing?.svg, svg.current.firstChild);
      } else {
        svg.current.appendChild(drawing?.svg);
      }
    }
  }, [drawing?.svg]);

  if (!drawing?.svg) return null;

  return (
    <div className={s.container}>
      <div className={s.drawing} ref={svg} />
      <Button
        className={s.button}
        type="small"
        onClick={() => setDrawingSvg(null)}
      >
        <UISvgSelector id="close" />
      </Button>
      <Button
        className={s.edit}
        type="unfilled"
        onClick={() => setPostEditorState("whiteboard")}
      >
        Edit <UISvgSelector id="canvas" />
      </Button>
    </div>
  );
}
