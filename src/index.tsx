import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RegisterService} from "./services/serviceRegistrator";

import 'primeflex/primeflex.css';
import './css/theme-light.css';

import {DIProvider} from "./contexts/DIContext";
import { configureQuill } from "./quillConfig";


RegisterService();
configureQuill();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <DIProvider>
      <App />
    </DIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
