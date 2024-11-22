import React, { useRef, useState } from 'react';
import { Editor, EditorProps } from "primereact/editor";
import Quill from 'quill';
import juice from "juice";

import { htmlDataContent } from "./__mocks__/htmlData";

import './index.scss';

/**
 * Импортирует модуль `parchment` из библиотеки Quill.
 * Parchment — это "ядро" Quill для управления DOM-элементами, их атрибутами, классами и стилями и др.
 * @type {Object}
 * @see {@link https://github.com/quilljs/parchment|Документация Parchment}
 */
const QuillParchment = Quill.import('parchment');


/**
 * Импортирует класс Attributor из модуля Parchment.
 * Attributor используется для управления атрибутами элементов
 *
 * @class QuillAttributor
 * @see {@link https://quilljs.com/docs/modules/attributors/|Документация Quill Attributor}
 */
const QuillAttributor = QuillParchment.Attributor;

/**
 * Создает новый атрибут с именем 'class'.
 * Этот атрибут используется для управления классами элементов в редакторе Quill.
 * Значения атрибута будут забираться из атрибута 'class' элементов.
 *
 * @class ClassAttributor
 * @extends QuillAttributor
 * @param {string} name - Имя атрибута в модели Quill (логическое имя).
 * @param {string} keyName - Имя атрибута, откуда будут забираться значения ('class').
 * @param {Object} options - Опции для атрибута.
 * @param {number} options.scope - Область применения атрибута (блочные и строчные элементы).
 */
const ClassAttributor = new QuillAttributor('class', 'class', {
  scope: QuillParchment.Scope.BLOCK,
});

const StyleAttributor = new QuillAttributor('style', 'style', {
  scope:QuillParchment.Scope.BLOCK,
});


// Регистрируем атрибуты в Quill
Quill.register(ClassAttributor, true);
Quill.register(StyleAttributor, true);


type THTMLEditorProps = EditorProps;

export const HTMLEditor: React.FC<THTMLEditorProps> = () => {
  const [value, setValue] = useState<string>(htmlDataContent);
  const editorRef = useRef<Editor>(null);

  const htmlTemplate = `
    <div style="font-size: 12px; color: red" class="big">Hello, World!</div>
    <span style="font-size: 24px; color: red" class="big">Test</span>
  `;

  const setQuillContent = () => {
    const quillInstance = editorRef.current?.getQuill();
    if (quillInstance) {
      quillInstance.clipboard.dangerouslyPasteHTML(juice(htmlDataContent));
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
