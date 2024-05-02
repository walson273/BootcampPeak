import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from './Data.js'

export function HelloWorld() {
    return <h1 className="greeting">REACT PRUEBA!</h1>;
  }
export const ComponenteDesign = (argumento) =>{
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

export const bSlide = (prop) => {
  return (
    <React.Fragment>
      
      <h1 className="greeting">AQUITOYYYYYYYYYY</h1>
      <div>
      {/*
        prop.slide_json.map((iter) => 
        <React.Fragment>

              <h1>{iter.name}</h1> 

      </React.Fragment>
      )*/}
      </div>
    </React.Fragment>
  );
}

export const Componente1 = () =>{
  
    return(
      <React.Fragment>
        <bSlide slide_json = {data.slideBar} />
       {/*} <ComponenteDesign jsonsito={data.funcionJson} />*/}
      </React.Fragment>
    );
  }
export const CompoLogo = (loguisimont)=>{
  return(
    <React.Fragment>
      <button type="button" className="btn btn-success">{loguisimont.loguisimo}</button>
    </React.Fragment>
  );
}