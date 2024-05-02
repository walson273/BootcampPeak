import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from './Data.js'



export const Logo = (info)=>{
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
}

export const TituloPuesto = (info)=>{
  return(
    <React.Fragment>
      <h2 className='tituloPuestoCSS'>{info.titulo}</h2>
    </React.Fragment>
  );
}

export const Habilidades = (info) => {
  return(
    <React.Fragment>
        
        <div className='habilidadesCSS'>
        {info.habilidad?.map( (habilidadC) =>
           <React.Fragment>
           <BotonHabilidad h = {habilidadC} />
           </React.Fragment>
        )}      
        </div> 
        
            
    </React.Fragment>
  );
}

export const BotonHabilidad = (info) =>{

  return(
    <React.Fragment>
      
      {<button type="button" className="btn btn-light">{info.h}</button>}

    </React.Fragment>

  )


}
export const EmpresaNombre = (info)=>{
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
}
export const Ubicacion = (info)=>{
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
}
export const Salario = (info)=>{
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
}
export const Disponibles = (info)=>{
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
}

export const Beneficios = (info)=>{
  return(
    <React.Fragment>
      
    </React.Fragment>
  );
}

export const ComponenteLista = (argumento) =>{
    return(
      <React.Fragment>
        <div class="all-content">
          {
            argumento.datos.map((iteracion)=>
              <React.Fragment>
                 
                 <section className='contenedor'>
                    <Logo logo = {iteracion.logo}/>
                    <TituloPuesto titulo = {iteracion.titulo}/>
                    <Habilidades habilidad = {iteracion.habilidad}/>
                    <EmpresaNombre nombre = {iteracion.nombre}/>
                    <Ubicacion ubicacion = {iteracion.ubicacion}/>
                    <Salario salario = {iteracion.salario}/>
                    <Disponibles disponible = {iteracion.disponible}/>
                    <Beneficios beneficios = {iteracion.beneficios} />
                 </section>
              </React.Fragment>
            )
          }
        </div>
      </React.Fragment>
    );
  }


