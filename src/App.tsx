import React from 'react';
import { EmailService } from "./services/EmailService";
import { useDIContainer } from "./contexts/DIContext";
import { HTMLEditor } from "./components/Editor";
import { htmlTemplateWithTables } from "./components/Editor/__mocks__/htmlData";

import './App.css';
import { QuillEditor } from "./components/Editor/QuillWrapper";

function App() {

  const container = useDIContainer();
  const emailService = container.resolve<EmailService>('EmailService');

  return (
    <div className="App">

      <QuillEditor value={'table'} onChange={(e) => console.log(e)}/>
    </div>
  );
}

export default App;
