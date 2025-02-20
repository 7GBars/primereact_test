import React, { useRef, useState } from 'react';
import { Editor, EditorProps } from "primereact/editor";
import juice from "juice";

import './index.scss';
import { QuillEditor } from "./QuillWrapper";

type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps & { native: boolean }> = ({
  defaultValue, showHeader, readOnly, onLoad, native
}) => {
  const editorRef = useRef<Editor>(null);

  const setQuillContent = () => {
    const quillInstance = editorRef.current?.getQuill();
    if (quillInstance) {
      quillInstance.clipboard.dangerouslyPasteHTML(juice(defaultValue as string));
    }
    !showHeader && (quillInstance.getModule('toolbar').container.style.display = 'none');
  };


  return (
    <div className="html-editor-container">
      {
        !native
          ? <Editor
            ref={editorRef}
            style={{ height: '300px' }}
            onLoad={(quill) => {
              setQuillContent()
            }}
            readOnly={readOnly}
          />
          : <QuillEditor value={defaultValue as string} onChange={(e) => console.log(e)}/>
      }
    </div>
  );
};
