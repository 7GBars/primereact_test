import React from 'react';
import {useRef} from "react";
import { Button } from 'primereact/button';
import {TieredMenu} from "primereact/tieredmenu";

import {TieredMenuTest} from "./components/TieredMenu/index";
import {items} from "./__mocksData__/";
import {InputText} from "primereact/inputtext";

import './App.css';
import {Password} from "primereact/password";




function App() {
  const tieredMenuInstance = useRef<TieredMenu>(null)
  return (
    <div className="App">
      <Button icon={'pi pi-check'} label="Show" onClick={(e) => tieredMenuInstance.current?.toggle(e)}/>
      <TieredMenuTest model={items} instanceRefObject={tieredMenuInstance}/>
      <h1>2</h1>
      <p>dome text</p>

      <div className={'card'}>
        text
      </div>
      <InputText keyfilter="int" placeholder="Integers" />
      <Password value={'as'} toggleMask />
    </div>
  );
}

export default App;
