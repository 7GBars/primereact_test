import {MenuItem} from "primereact/menuitem";
import {JSX} from "react";
import React from "react";
import {ReactNode} from "react";

export const addTemplateToItems = (items: MenuItem[] | undefined, itemTemplate: (item: MenuItem) => ReactNode) => {
  if(!items) return [];
  items.forEach(item => {
    // Добавляем свойство template к текущему элементу
    item.template = itemTemplate;

    // Если у элемента есть вложенные items, рекурсивно вызываем эту же функцию для них
    if (item.items) {
      addTemplateToItems(item.items as MenuItem[], itemTemplate);
    }
  });
};