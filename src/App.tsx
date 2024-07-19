import React from 'react';
import {useRef} from "react";
import { Button } from 'primereact/button';
import {TieredMenu} from "primereact/tieredmenu";

import {TieredMenuTest} from "./components/TieredMenu/index";
import {items} from "./__mocksData__/";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {EmailService} from "./services/EmailService";
import {useDIContainer} from "./contexts/DIContext";
import {MyStepper} from './components/Stepper'
import './App.css';



import {test} from './services/test';



function App() {

  const tieredMenuInstance = useRef<TieredMenu>(null);
  const container = useDIContainer();
  const emailService = container.resolve<EmailService>('EmailService');
  const handleClick = () => {
    emailService.sendEmail('Hello from SomeComponent!');
  };
  return (
    <div className="App">
      <Button icon={'pi pi-check'} label="Show" onClick={(e) => tieredMenuInstance.current?.toggle(e)}/>
      <Button icon={'pi pi-check'} label="Show" onClick={(e) => handleClick()}/>
      <TieredMenuTest model={items} instanceRefObject={tieredMenuInstance}/>
      <h1>2</h1>
      <p>dome text</p>

      <div className={'card'}>
        text
      </div>
      <MyStepper/>
    </div>
  );
}

export default App;
