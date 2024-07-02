import React, {FC, LegacyRef} from 'react';
import {TieredMenu} from "primereact/tieredmenu";
import {MenuItem} from "primereact/menuitem";
import {Badge} from "primereact/badge";

import arrow from '../../assets/header-desktop-submenu-arrow__hover-on.svg'
import {addTemplateToItems} from "../../helpers/index";
import {TieredMenuItemTemplate} from "./TieredMenuItemTemplate";


type TieredMenuProps = {
  model: MenuItem[] | undefined;
  instanceRefObject: LegacyRef<TieredMenu> | null;
  isPopupMode?: boolean;
};


export const TieredMenuTest: FC<TieredMenuProps> = ({model, instanceRefObject, isPopupMode}) => {

  addTemplateToItems(model, TieredMenuItemTemplate);

  return (<>
    <TieredMenu style={{width: 234}} ref={instanceRefObject} popup model={model}/>
  </>);
};


