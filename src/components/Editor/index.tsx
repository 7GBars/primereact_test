import React, { useState } from 'react';
import { Editor, EditorProps, EditorTextChangeEvent } from "primereact/editor";

import './index.scss'


type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = (props) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className={'html-editor-container'}>
      <Editor {...props} value={value} onTextChange={(e: EditorTextChangeEvent) => setValue(e.htmlValue as string)}/>
    </div>
  );
}

