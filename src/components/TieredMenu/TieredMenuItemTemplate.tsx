import React from 'react';

import {TMyMenuItemData} from "./types";

export const TieredMenuItemTemplate = (itemData: TMyMenuItemData) => (
  <div className={'item-container'}>
    <div className={'item-container__icon'}>{itemData.icon}</div>
    <div className={'item-container__text'}>{itemData.label}</div>
    <div className={'item-container__arrow-icon'}></div>
  </div>
);


