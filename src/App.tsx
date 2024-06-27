import React from 'react';
import { Button } from 'primereact/button';
import {TieredMenu} from "primereact/tieredmenu";

import {items} from "./__mocksData__/";

import './App.css';

function App() {
  return (
    <div className="App">
      <Button >test </Button>
      <TieredMenu model={items} breakpoint="767px" />
    </div>
  );
}

export default App;
