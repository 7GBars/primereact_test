import React from 'react';

import {TMyMenuItemData} from "./types";

import './index.scss';
export const TieredMenuItemTemplate = (itemData: TMyMenuItemData) => (
  <div className={'item-container'}>
    <div className={'item-container__item-data'}>
      <div className={'item-data__icon'}><i className={itemData.icon}/></div>
      <div className={'item-container__text'}>{itemData.label}</div>
    </div>
    { itemData.items && <div className={'item-container__arrow-icon'}>
      <i className={'pi pi-angle-right'}/>
    </div>}
  </div>
);


