import { useEffect } from "react";

export const htmlDataContent = "<!DOCTYPE html>\n" +
  "<html lang=\"en\">\n" +
  "<head>\n" +
  "    <style>\n" +
  "      h1 {\n" +
  "        color: #333!important;\n" +
  "        font-size: 24px;\n" +
  "      }\n" +
  "      .big {\n" +
  "        font-size: 200px;\n" +
  "      }\n" +
  "    </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "   <div class=\"big\">\n" +
  "       data\n" +
  "   </div>\n" +
  "   <h1>Test</h1>\n" +
  "   <p class=\"big\" style=\"font-size: 200px;\">\n" +
  "       data\n" +
  "   </p>\n" +
  "   <h1 style=\"color: red; font-size: 24px;\">Test</h1>\n" +
  "</body>\n" +
  "</html>"

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
