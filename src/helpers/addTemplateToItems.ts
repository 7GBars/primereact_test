import {MenuItem} from "primereact/menuitem";
import {JSX} from "react";
import React from "react";
import {ReactNode} from "react";
import {TMyMenuItemData} from "../components/TieredMenu/types";
import {MenuItemOptions} from "primereact/menuitem";

export const addTemplateToItems = (items: MenuItem[] | undefined, itemTemplate: (item: TMyMenuItemData, options: MenuItemOptions) => ReactNode) => {
  if(!items) return [];
  items.forEach(item => {

    item.template = itemTemplate as ReactNode | ((item: MenuItem, options: MenuItemOptions) => ReactNode);
    if (item.items) {
      addTemplateToItems(item.items as MenuItem[], itemTemplate);
    }

  });
};