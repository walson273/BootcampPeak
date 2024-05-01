import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from './Data.js'


export const ComponenteLista = (argumento) =>{
    return(
      <React.Fragment>
        <div class="all-content">
          {
            argumento.datos.map((iteracion)=>
              <React.Fragment>
                 
                 <section className='contenedor'>
                    <Logo />
                    <TituloPuesto />
                    <Habilidades />
                    <EmpresaNombre />
                    <Ubicacion />
                    <Salario />
                    <Disponibles />
                 </section>

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

  
