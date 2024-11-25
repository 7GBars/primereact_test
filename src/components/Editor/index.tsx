import React, { useRef, useState } from 'react';
import { Editor, EditorProps } from "primereact/editor";
import juice from "juice";

import './index.scss';

type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = ({
  defaultValue, showHeader, readOnly, onLoad,
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
      <Editor
        ref={editorRef}
        style={{ height: '300px' }}
        onLoad={(quill) => {
          setQuillContent()
        }}
        readOnly={readOnly}
      />
    </div>
  );
};
