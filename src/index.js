import React from 'react';
import ReactDOM from 'react-dom';
/**
 *  * Al importar el archivo index.css en index.js
 *  * esto esta haciendo un import global, es decir que lo puedo usar desde cualquier archivo
 */
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
/**
 *  ? Para poder importar un componente debemos llamarlo por el nombre que fue exportado.
 */

// import PrimerComponente from "./App";
// import Home from "./pages/Home";

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* //* Para usar un componente debo tratarlo como si fuera una etiqueta HTML */}
    {/* <PrimerComponente /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
