import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
              <img className="imagensita" src={iteracion.img} />
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
  const funcionJson=[
    {'nombre':'Camilo', 'edad':'24', 'logo':['a','b','c','d'], 'img':'https://img.static-af.com/images/media/E56219E9-21C7-4BB0-B7A5F5353A5140D3/?w=320&aspect_ratio=2:1'},
    {'nombre':'Carlos', 'edad':'24','logo':['a','b','c'], 'img':'https://upload.wikimedia.org/wikipedia/commons/e/e0/Air_india_b747-400_vt-esn_arp.jpg'},
    {'nombre':'Liam', 'edad':'3.8','logo':['a','b'], 'img':'https://img.freepik.com/vector-gratis/ilustracion-contorno-avion-dibujado-mano_23-2150348345.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1714348800&semt=ais'},
    {'nombre':'Angie', 'edad':'29','logo':['a'], 'img':'https://s1.elespanol.com/2023/11/11/actualidad/808929310_237509963_1706x960.jpg'}
  ]
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

