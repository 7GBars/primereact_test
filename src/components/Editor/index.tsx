import React, { useState } from 'react';
import { Editor, EditorProps, EditorTextChangeEvent } from "primereact/editor";

import './index.scss'
import { htmlDataContent } from "./__mocks__/htmlData";


type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = (props) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className={'html-editor-container'}>
      <Editor {...props} value={htmlDataContent} onTextChange={(e: EditorTextChangeEvent) => setValue(e.htmlValue as string)}/>
    </div>
  );
}

