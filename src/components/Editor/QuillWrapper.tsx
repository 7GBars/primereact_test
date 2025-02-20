import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "quill-table-better/dist/quill-table-better.css";
import * as QuillTableBetter from "quill-table-better";

interface QuillEditorProps {
  value?: string;
  onChange?: (content: string) => void;
}

export const QuillEditor: React.FC<QuillEditorProps> = ({ value = "", onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstanceRef = useRef<Quill | null>(null);

  useEffect(() => {
    // Проверяем, зарегистрирован ли модуль "table-better"
    if (!Quill.imports["modules/table-better"]) {
      Quill.register("modules/table-better", QuillTableBetter as any);
    }

    // Если редактор уже инициализирован, ничего не делаем
    if (quillInstanceRef.current) return;

    // Настройка панели инструментов
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // Форматирование текста
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],
      [{ header: 1 }, { header: 2 }], // Заголовки
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], // Списки
      [{ script: "sub" }, { script: "super" }], // Надстрочный/подстрочный текст
      [{ indent: "-1" }, { indent: "+1" }], // Отступы
      [{ direction: "rtl" }], // Направление текста
      [{ size: ["small", false, "large", "huge"] }], // Размер шрифта
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // Цвет текста и фона
      [{ font: [] }],
      [{ align: [] }],
      ["clean"], // Очистка форматирования
      ["table-better"], // Добавление таблицы
    ];

    // Инициализация Quill
    const initializeQuill = () => {
      if (!editorRef.current) return;

      quillInstanceRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
          table: false, // Отключаем стандартный модуль таблиц
          "table-better": {
            toolbarTable: true,
            menus: ["column", "row", "merge", "table", "cell", "wrap", "copy", "delete"],
          },
          keyboard: {
            bindings: (QuillTableBetter as any).keyboardBindings,
          },
        },
      });

      // Установка начального значения
      setTimeout(() => {
        quillInstanceRef.current?.clipboard.dangerouslyPasteHTML(
          0,
          value,
          Quill.sources.SILENT
        );
      }, 0);

      // Обработка изменений содержимого
      quillInstanceRef.current.on("text-change", () => {
        if (onChange) {
          onChange(quillInstanceRef.current!.root.innerHTML);
        }
      });
    };

    // Инициализация Quill при монтировании компонента
    initializeQuill();

    // Очистка при размонтировании
    return () => {
      quillInstanceRef.current?.off("text-change");
      // quillInstanceRef.current?.destroy();
      quillInstanceRef.current = null;
    };
  }, [value, onChange]);

  return <div ref={editorRef} style={{ height: "300px" }} />;
};

