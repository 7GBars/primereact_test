import React, { useEffect, useRef, useState } from 'react';
import { Editor, EditorProps, EditorTextChangeEvent } from "primereact/editor";
import juice from "juice";
import Quill from 'quill';

import './index.scss'
import { htmlDataContent } from "./__mocks__/htmlData";
import { Button } from "primereact/button";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;



type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = (props) => {
  const [value, setValue] = useState<string>(juice(htmlDataContent));
  const editorRef = useRef<Editor>(null); // Ссылка на Editor

  const htmlTemplate = `
<div style="font-size: 24px;" class="big">Hello, World!</div>
`;

  const setQuillContent = (quill: any) => {
    const quillFromEditorInstance = editorRef.current?.getQuill();
    quillFromEditorInstance.clipboard.dangerouslyPasteHTML(htmlTemplate);
  };


  return (
    <div className={'html-editor-container'}>
      <Editor
        onLoad={setQuillContent}
        ref={editorRef}

      />
    </div>
  );
}

