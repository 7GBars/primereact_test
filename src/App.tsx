import React, { useState } from 'react';
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
import { HTMLEditor } from "./components/Editor";
import { htmlTemplate, htmlTemplateWithHeader } from "./components/Editor/__mocks__/htmlData";



function App() {

  const container = useDIContainer();
  const emailService = container.resolve<EmailService>('EmailService');

  return (
    <div className="App">
      <HTMLEditor
        defaultValue={htmlTemplateWithHeader}
        showHeader={false}
      />
    </div>
  );
}

export default App;
