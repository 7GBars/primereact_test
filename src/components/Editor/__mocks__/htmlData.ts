import { useEffect } from "react";

export const htmlTemplateWithHeader = "<!DOCTYPE html>\n" +
  "<html lang=\"en\">\n" +
  "<head>\n" +
  "    <style>\n" +
  "      h1 {\n" +
  "        color: red!important;\n" +
  "        font-size: 24px;\n" +
  "      }\n" +
  "      .big {\n" +
  "        font-size: 40px;\n" +
  "      }\n" +
  "    </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "   <div class=\"big\">\n" +
  "       data\n" +
  "   </div>\n" +
  "   <h1>Test</h1>\n" +
  "   <p class=\"big\" >\n" +
  "       data\n" +
  "   </p>\n" +
  "</body>\n" +
  "</html>"


export const htmlTemplate = `
    <div style="font-size: 12px; color: red" class="big">Hello, World!</div>
    <span style="font-size: 24px; color: red" class="big">Test</span>
`;


const useStyles = (htmlDataContent: string) => {
  useEffect(() => {
    // Извлечение стилей из htmlDataContent
    const styleMatch = htmlDataContent.match(/<style[^>]*>([\s\S]*?)<\/style>/);
    if (styleMatch && styleMatch[1]) {
      const styleElement = document.createElement('style');
      styleElement.textContent = styleMatch[1];
      document.head.appendChild(styleElement);

      return () => {
        // Удаляем стили при размонтировании компоненты
        document.head.removeChild(styleElement);
      };
    }
  }, []);
}
