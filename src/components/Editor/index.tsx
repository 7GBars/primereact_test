import React from 'react';
import { Editor, EditorProps } from "primereact/editor";

import './index.scss'


type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = (props) => {

  return (
    <div className={'html-editor-container'}>
      <Editor {...props}/>
    </div>
  );
}

