import React, { useEffect, useRef, useState } from 'react';
import { Editor, EditorProps, EditorTextChangeEvent } from "primereact/editor";
import juice from "juice";
import Quill from 'quill';

import './index.scss'
import { htmlDataContent } from "./__mocks__/htmlData";



type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = (props) => {
  const [value, setValue] = useState<string>(juice(htmlDataContent));
  const editorRef = useRef<any>(null); // Ссылка на Editor



  const test = ' <div class="big" style="font-size: 200px;">as</div>'
  const test2 = ' <div class="big" style="color: red;">as</div>'
  const test3 = ' <div class="big" style="border: 1px solid red;" dangerouslySetInnerHTML={{__html: test2}}>as</div>'


  return (
    <div className={'html-editor-container'}>
      <Editor
        ref={editorRef}
        value={test3}
        onTextChange={(e: EditorTextChangeEvent) => setValue(e.htmlValue as string)}
      />
    </div>
  );
}

