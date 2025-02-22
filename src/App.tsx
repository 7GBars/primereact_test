import React, { useRef } from 'react';
import { EmailService } from "./services/EmailService";
import { useDIContainer } from "./contexts/DIContext";
import { HTMLEditor } from "./components/Editor";
import { htmlTemplateWithTables } from "./components/Editor/__mocks__/htmlData";
import { QuillEditor } from "./components/Editor/QuillWrapper";
import { WrappedTree } from "./components/Tree";
import type { Tree } from "primereact/tree";

import './App.css';


function App() {
  const treeRef = useRef<Tree | null>(null);

  return (
    <div className="App">
      <WrappedTree ref={treeRef}/>
    </div>
  );
}

export default App;
