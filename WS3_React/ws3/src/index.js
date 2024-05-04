import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as compo from'./componentes.js';
import * as data from './Data.js'
import reportWebVitals from './reportWebVitals';
import * as sli from './slide_Bar.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <compo.Headers/>
    <sli.BSlide dat = {data.slideBar}/>
    <compo.ComponenteLista datos={data.funcionJson} />
  </React.StrictMode>
);
reportWebVitals();

