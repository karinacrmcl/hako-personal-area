import React, { useEffect, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

type Props = {};

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default function TextEditor({}: Props) {
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  );

  const editorChangeHandler = (e: EditorState) => {
    setEditorState(e);
  };

  useEffect(() => {
    editorState && console.log(convertToRaw(editorState?.getCurrentContent()));
  }, [editorState]);

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={editorChangeHandler}
      />
    </div>
  );
}
