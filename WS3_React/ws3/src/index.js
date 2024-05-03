import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as compo from'./componentes.js';
import * as data from './Data.js'
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <compo.ComponenteLista datos={data.funcionJson} />
  </React.StrictMode>
);
reportWebVitals();

