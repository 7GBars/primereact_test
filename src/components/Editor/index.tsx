import React, { useEffect, useState } from 'react';
import { Editor, EditorProps, EditorTextChangeEvent } from "primereact/editor";

import './index.scss'
import { htmlDataContent } from "./__mocks__/htmlData";


type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = (props) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    // Извлечение стилей из htmlDataContent
    const styleMatch = htmlDataContent.match(/<style[^>]*>([\s\S]*?)<\/style>/);

    if (styleMatch && styleMatch[1]) {
      console.log('styleMatch', styleMatch[1])

      const styleElement = document.createElement('style');
      styleElement.textContent = styleMatch[1];
      document.head.appendChild(styleElement);

      return () => {
        // Удаляем стили при размонтировании компоненты
        document.head.removeChild(styleElement);
      };
    }
  }, []);
  return (
    <div className={'html-editor-container'}>
      <Editor {...props} value={htmlDataContent} onTextChange={(e: EditorTextChangeEvent) => setValue(e.htmlValue as string)}/>
    </div>
  );
}

