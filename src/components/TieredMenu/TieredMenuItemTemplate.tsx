import React from 'react';
import { container } from 'tsyringe';
import {TMyMenuItemData} from "./types";
import {EmailService} from "../../services/EmailService";
import './index.scss';


export const TieredMenuItemTemplate = (itemData: TMyMenuItemData) => {
  const hasItems = itemData.items?.length;
  const emailService = container.resolve<EmailService>('EmailService');
  return (
    <div className={'item-container'}>
      <div className={'item-container__item-data'}>
        <div className={'item-data__icon'}><i className={itemData.icon}/></div>
        <div
          className={`item-container__text ${hasItems ? '' : 'item-container__text--active'}`}
          onClick={(e) => {
            !hasItems && emailService.sendEmail('from tiredMenu')
          }}
        >
          {itemData.label}
        </div>
      </div>
      { hasItems && <div className={'item-container__arrow-icon'}>
        <i className={'pi pi-angle-right'}/>
      </div>}
    </div>
  );
}


