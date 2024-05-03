import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from './Data.js'
import * as sli from './slide_Bar.js'


export const Logo = (info)=>{
  return(
    <React.Fragment>
      {<img className='logoCSS' src={info.logo} alt='logo'/>}
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
      <div className='nombreCSS'>
      <data.IconoEmpresa />
      {<span>{info.nombre}</span>}
      </div>
    </React.Fragment>
  );
}
export const Ubicacion = (info)=>{
  return(
    <React.Fragment>
      <div className='ubicacionCSS'>
      <data.IconoUbicacion />
      {<span>{info.ubicacion}</span>}
      </div>
    </React.Fragment>
  );
}
export const Salario = (info)=>{
  return(
    <React.Fragment>
      <div className='salarioCSS'>
      <data.IconoDinero />
      {<span>$ {info.salario} COP</span>}
      </div>
    </React.Fragment>
  );
}
export const Disponibles = (info)=>{
  return(
    <React.Fragment>
      <div className='disponibleCSS'>
      <data.IconoDisponibles />
      {<span>{info.disponible}</span>}
      </div>
    </React.Fragment>
  );
}

export const Beneficios = (info)=>{
  return(
    <React.Fragment>

      <div className='beneficiosCSS'>
        {info.beneficios?.map( (beneficioC) =>
           <React.Fragment>
           <IconosBeneficios b = {beneficioC} />
           </React.Fragment>
        )}      
      </div> 
      
    </React.Fragment>
  );
}

export const IconosBeneficios = (info) =>{

const seleccion = () => {

  switch(info.b){
    case 'ca':
      return <data.IconoCapacitaciones />
    case 'ce':
      return <data.IconoCertificaciones />
    case 'fiesta':
      return <data.IconoFiesta />
    case 'flex':
      return <data.IconoFlexibilidad />
    case 'ami':
      return <data.IconoAmigable />
    default:
      return <data.IconoFiesta />
  }


}
  
  return(
    <React.Fragment>
      
      {<button type="button" className="btn btn-light">
        {seleccion()}</button>}

    </React.Fragment>

  )
}
export const ComponenteLista = (argumento) =>{
    return(
      <React.Fragment>
        <div class="all-content">
          {
            argumento.datos?.map((iteracion)=>
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




// export const BSlide = (prop) => {
//    return (
//      <React.Fragment>
//        <h1 className="greeting">AQUITOYYYYYYYYYY</h1>
//        <div className='lista'>

//        <nav>
              
//          <ul>
//           {prop.dat.map((iter) =>
//            <li className='list-group-item'>  

//              <div>

//                  <button type="button" className='btn btn-light'>
                  
//                    <h1> {iter.name}  </h1>
//                  </button>

//              </div>

//            </li>
//           )
//         }
//          </ul>

//        </nav>

//        </div>
//      </React.Fragment>
//    );
// }

// export const Componente1 = () =>{
  
//     return(
//       <React.Fragment>
//         <BSlide   />
//       </React.Fragment>
//     );
//   }
export const CompoLogo = (loguisimont)=>{
  return(
    <React.Fragment>
      <button type="button" className="btn btn-success">{loguisimont.loguisimo}</button>
    </React.Fragment>
  );
}