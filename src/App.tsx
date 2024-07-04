import React from 'react';
import {useRef} from "react";
import { Button } from 'primereact/button';
import {TieredMenu} from "primereact/tieredmenu";

import {TieredMenuTest} from "./components/TieredMenu/index";
import {items} from "./__mocksData__/";

import './App.css';




function App() {
  const tieredMenuInstance = useRef<TieredMenu>(null)
  return (
    <div className="App">
      <Button label="Show" onClick={(e) => tieredMenuInstance.current?.toggle(e)}/>
      <TieredMenuTest model={items} instanceRefObject={tieredMenuInstance}/>
      <h1>2</h1>
      <p>dome text</p>
    </div>
  );
}

export default App;
