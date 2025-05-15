import React from 'react';
import ReactDOM from 'react-dom/client';
import "tea-component/dist/tea.css";
import 'highlight.js/styles/github.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClickToComponent } from "click-to-react-component";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <ClickToComponent editor={'cursor'}/>
      <App/>
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
