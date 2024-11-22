import React, { useRef, useState } from 'react';
import { Editor, EditorProps } from "primereact/editor";
import Quill from 'quill';
import './index.scss';
import { htmlDataContent } from "./__mocks__/htmlData";

// Подключаем атрибуты для Quill
const QuillAttributor = Quill.import('parchment').Attributor;

// Добавляем атрибуты `class` и `style`
const ClassAttributor = new QuillAttributor('class', 'class', {
  scope: Quill.import('parchment').Scope.BLOCK,
});
const StyleAttributor = new QuillAttributor('style', 'style', {
  scope: Quill.import('parchment').Scope.BLOCK,
});

// Регистрируем атрибуты
Quill.register(ClassAttributor, true);
Quill.register(StyleAttributor, true);

type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = () => {
  const [value, setValue] = useState<string>(htmlDataContent);
  const editorRef = useRef<Editor>(null);

  const htmlTemplate = `
    <div style="font-size: 24px;" class="big">Hello, World!</div>
  `;

  const setQuillContent = () => {
    const quillInstance = editorRef.current?.getQuill();
    if (quillInstance) {
      quillInstance.clipboard.dangerouslyPasteHTML(htmlTemplate);
    }
  };

  return (
    <div className="html-editor-container">
      <Editor
        ref={editorRef}
        style={{ height: '300px' }}
        onLoad={(quill) => {
          setQuillContent()
        }}
      />
    </div>
  );
};
