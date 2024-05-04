import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from './Data.js'
import './index.css';

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
      {<span> $ {info.salario} COP</span>}
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
        <div class="ListaEntera">
          {
            argumento.datos?.map((iteracion)=>
              <React.Fragment>
                
                 
                 <section  className='contenedor'>
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

export const Headers = () =>{
  return(
    <React.Fragment>
      <WhiteHeader/>
      <BlueHeader/>
    </React.Fragment>
  );
}
export const WhiteHeader = () =>{
  return(
    <React.Fragment>
      <div className='HeaderNav'>
        <nav id="fullNav" class="nav container">
          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li><a href="#" class="nav__link">Empleos</a></li>
              <li><a href="#" class="nav__link">Bootcamp</a></li>
              <li><a href="#" class="nav__link">Sobre nosotros</a></li>
              <li class="dropdown__item">
                <div class="nav__link">
                  Para profesionales <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul class="dropdown__menu">
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-pie-chart-line"></i> Inicio</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Empleos</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Cursos y retos </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Preguntas </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Profesores </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Bootcamp </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown__item">
                <div class="nav__link">
                  Para empresas <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>
                <ul class="dropdown__menu">
                  <li>
                    <a href="#" class="dropdown__link"><i class="ri-pie-chart-line"></i> Inicio</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Publicar empleo </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Nuestro proceso </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Precios </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Pruebas Online </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Nómina </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Blog </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Comercial </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link"> <i class="ri-arrow-up-down-line"></i> Caclculadora de salario </a>
                  </li>
                </ul>
              </li>
              <li class="nav__link">
                <a id="btn_espanol" href="#" target="_self" class="nav-link btn-sm border" role="button">
                  <div id="div_espanol" class="d-flex align-items-center justify-content-center">
                    <svg id="globo" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="globe" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-globe mr-1 b-icon bi"><g data-v-3b0d2ab4=""><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></g></svg> <span data-v-3b0d2ab4="">Español</span>
                  </div>
                </a>
              </li>
              <li class="nav__link">
                <a id="btn_campana" href="#" target="_self" class="nav-link btn-sm" role="button">
                  <div id="div_espanol" class="d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" /></svg>
                  </div>
                </a>
              </li>
              <li>
                <div id="perfil">
                  <div id="icono-persona">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" /><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" /></svg>
                  </div>
                  <div id="perfil-nombre">
                    <p>Nombre</p>
                  </div>
                  <div id="icono-gema">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16"><path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" /></svg>
                  </div>
                  <div id="valor-gema">
                    <p>4200</p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
export const BlueHeader = () =>{
  return(
    <React.Fragment>
      <div id="azulito">

      </div>
    </React.Fragment>
  );
}


