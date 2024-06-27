import React, {FC} from 'react';
import {MenuItem} from "primereact/menuitem";
import {Badge} from "primereact/badge";

type TieredMenuItemTemplateProps = {
  item: MenuItem & { shortcut: string, badge: number };
};

export const TieredMenuItemTemplate = (item: any) => (
  <div className={'item-container'}>
      as
  </div>
);


