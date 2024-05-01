import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {funcionJson} from './Data.js'
import HelloWorld from'./pruebita.js';
import App from './App';
import reportWebVitals from './reportWebVitals';



const ComponenteDesign = (argumento) =>{
  return(
    <React.Fragment>
      <div class="all-content">
        {
          argumento.jsonsito.map((iteracion)=>
            <React.Fragment>
              <h2>{iteracion.nombre}</h2>
              <p>{iteracion.edad}</p>
              {
                iteracion.logo.map((loguito)=>
                  <CompoLogo loguisimo={loguito}/>
                  /*<button type="button" className="btn btn-light">{loguito}</button>*/
                )
              }
              <img className="imagen-prueba" src={iteracion.img} />
            </React.Fragment>
          )
        }
      </div>
    </React.Fragment>
  );
}
const CompoLogo = (loguisimont)=>{
  return(
    <React.Fragment>
      <button type="button" className="btn btn-success">{loguisimont.loguisimo}</button>
    </React.Fragment>
  );
}
const Componente1 = () =>{

  return(
    <React.Fragment>
      <ComponenteDesign jsonsito={funcionJson} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <HelloWorld />
    <Componente1/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

