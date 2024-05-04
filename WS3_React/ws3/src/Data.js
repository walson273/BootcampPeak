import React from 'react';
import {BsBriefcase,BsController,BsFileEarmarkPerson } from "react-icons/bs";
import { LuFileCheck } from "react-icons/lu";
import { PiBracketsCurly } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";

export const slideBar = [
  {'name' : 'Empleos', 'icon' : <BsBriefcase />, 'link' : ''},
  {'name' : 'Postulaciones', 'icon' : <LuFileCheck />, 'link' : 'https://peaku.co/es/postulaciones'},
  {'name' : 'CodeX', 'icon' : <BsController />, 'link' : 'https://peaku.co/es/cursos'},
  {'name' : 'Preguntas', 'icon': <BiMessageRoundedDetail />, 'link' : 'https://peaku.co/es/preguntas'},
  {'name' : 'Bootcamp', 'icon': <PiBracketsCurly />, 'link' : 'https://peaku.co/es/bootcamp-fullstack'},
  {'name' : 'Premios', 'icon': <IoDiamondOutline />, 'link' : 'https://peaku.co/es/premios'},
  {'name' : 'Tu Cv', 'icon': <BsFileEarmarkPerson />, 'link' : 'https://peaku.co/es/cv'}
];

/*
export const slideBar = [
  {'name' : 'Empleos', 'img' : 'https://placeimg.com/640/480/arch'},
  {'name' : 'Postulaciones', 'img' : 'https://placeimg.com/640/480/arch'},
];*/



export const funcionJson=[

  {'logo':'imagencitas/logo1.png','titulo':'Ingeniero de infraestructura TL','habilidad': ['Project Management','Complianece With Indicators','Liderazgo'], 'nombre':'offimedicas s.a', 'ubicacion': 'Bucaramanga', 'salario': '2.8M', 'disponible':'1','beneficios':['ce','fiesta','ca']},

  {'logo':'imagencitas/logo2.jpg','titulo':'Tester de software','habilidad': ['Resolucion capacity','Complianece With Indicators','Liderazgo'], 'nombre':'colmedicas s.a', 'ubicacion': 'Bucaramanga(presencial)', 'salario': '5M-7M', 'disponible':'3','beneficios':['ce','fiesta','flex']},

    {'logo':'imagencitas/logo3.png','titulo':'Director comercial','habilidad': ['Business Analysis','Commercial Relationship','Commercial Strategy'], 'nombre':'Confidencial', 'ubicacion': 'Bucaramanga', 'salario': 'Confidencial', 'disponible':'1','beneficios':['ce','fiesta','ca']},
    
    {'logo':'imagencitas/logo4.png','titulo':'E-commercer & SEO Specialist','habilidad': ['Email Marketing','Wordpress','Ecommerce'], 'nombre':'Skla Consulting', 'ubicacion': 'Bogota', 'salario': '4M-6M', 'disponible':'1','beneficios':['']},

    {'logo':'imagencitas/logo5.png','titulo':'Ingeniero de datos','habilidad': ['Bi','Etl','Python'], 'nombre':'Direktio', 'ubicacion': 'Remoto Colombia', 'salario': '3.5M', 'disponible':'1','beneficios':['Trabajo remoto','flex','Leccion en programacion','Celebracion de dias especiales','ami','Dia completo o medio dia libre de cumpleaños']},
     
    {'logo':'imagencitas/logo6.png','titulo':'Grow Manager','habilidad': ['Negotiation Skill','Project Management','Lead Work Teams'], 'nombre':'Vichara Techologies/Tech Labs...', 'ubicacion': 'Hibrido-mix remoto y presencial...', 'salario': 'Confidencial', 'disponible':'1','beneficios':['Seguro medico privado','flex','Trabajo remoto parcial','Celebracion de dias especiales','ami','Ca']}
     
    ,{'logo':'imagencitas/logo7.jpg','titulo':'Ejecutivo comercial senior, en MetLife','habilidad': ['Commercial Aggressiveness','Negotiating Capacity.'], 'nombre':'Metlife Medellin', 'ubicacion': 'Medellin', 'salario': '2.9M-6M', 'disponible':'1','beneficios':['ami']},
     
    {'logo':'imagencitas/logo8.png','titulo':'Analista de calidad','habilidad': ['QA','Quality Audit','Process Quality'], 'nombre':'OFFIMEDICAS S.A', 'ubicacion': 'Bucaramanga', 'salario': '1.5M', 'disponible':'1','beneficios':['ami','Flex','Ca']}
     
    ,{'logo':'imagencitas/logo9.jpg','titulo':'Coordinador de Calidad','habilidad': ['QA','Quality Audit','Proccess Quality'], 'nombre':'OFFIMEDICAS S.A', 'ubicacion': 'Bucaramanga', 'salario': '2.5M', 'disponible':'1','beneficios':['Ce','Fiesta','Ca']},
     
    {'logo':'imagencitas/logo10.jpg','titulo':'Ingeniero de calidad','habilidad': ['QA','Quality Audit'], 'nombre':'OFFIMEDICAS S.A', 'ubicacion': 'Bucaramanga', 'salario': '2M', 'disponible':'1','beneficios':['Ce','Fiesta','Ca']}
     
    ,{'logo':'imagencitas/logo11.png','titulo':'Director de infraestructuras TI','habilidad': ['Project Management','Complianece With Indicators','Liderazgo'], 'nombre':'Confidencial', 'ubicacion': 'Bucaramanga', 'salario': '5M-7M', 'disponible':'1','beneficios':['Certificado','Fiesta','Ca']},
     
    {'logo':'imagencitas/logo12.jpg','titulo':'Director Comercial  Pasarela de Pago','habilidad': ['Negotiation Strategy','Comercial Analysis','Business Closure'], 'nombre':'Be Movil', 'ubicacion': 'Pereira(presencial)', 'salario': '3.7M-4M', 'disponible':'1','beneficios':['']}
     
    ,{'logo':'imagencitas/logo13.png','titulo':'Tester de Software','habilidad': ['Resolution Capacity','Complianece With Indicators','Agile Work'], 'nombre':'OFFIMEDICAS S.A', 'ubicacion': 'Presencial(Bucaramanga)', 'salario': '2.8M', 'disponible':'1','beneficios':['Ce','Fiesta','Ca']},
     
    {'logo':'imagencitas/logo14.jpeg','titulo':'Desarollo de software','habilidad': ['Resolucion capacity','Adaptation to Changes'], 'nombre':'OFFIMEDICAS S.A', 'ubicacion': 'Bucaramanga', 'salario': '2.8M', 'disponible':'1','beneficios':['Ce','Fiesta','Ca']}
     
    ,{'logo':'imagencitas/logo15.png','titulo':'Practicante del SENA','habilidad': ['Englis','Business Skill','Excel'], 'nombre':'Asosalud Ltda', 'ubicacion': 'Presencial(Bogota)', 'salario': '975K', 'disponible':'1','beneficios':['']},
     
    {'logo':'imagencitas/logo192.png','titulo':'Quimico Farmaceutico','habilidad': ['Capacidad De Analisis','Process Improvent','Liderazgo'], 'nombre':'Confidecial', 'ubicacion': 'Bucaramanga', 'salario': '5M-7M', 'disponible':'1','beneficios':['Ce','Fiesta','Ca']}
        
  ]

export const Icon_Empleos = () =>{
  return(
    <React.Fragment>
             <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="building" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-building b-icon bi"><g data-v-378c8849=""><path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"></path><path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path></g></svg>   
    </React.Fragment>
)
}


export const IconoEmpresa = () =>{

return(
    <React.Fragment>
             <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="building" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-building b-icon bi"><g data-v-378c8849=""><path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"></path><path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path></g></svg>   
    </React.Fragment>



)

}


export const IconoUbicacion = () =>{

    return(
        
        <React.Fragment>

            <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="geo alt" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-geo-alt b-icon bi"><g data-v-378c8849=""><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></g></svg>
         </React.Fragment>
        
        
    )
    
    }

  
export const IconoDinero = () =>{

        return(
            
            <React.Fragment>
                 <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="cash" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-cash b-icon bi"><g data-v-378c8849=""><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path></g></svg>
             </React.Fragment>
            
            
        )
        
        }



export const IconoDisponibles = () =>{

        return(
                
                <React.Fragment>
                   <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="people" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-people b-icon bi"><g data-v-378c8849=""><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></g></svg>
           </React.Fragment>
                
                
            )
            
            }
    

export const IconoCertificaciones = () =>{

    return(
            
        <React.Fragment>
       <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="file earmark check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-file-earmark-check b-icon bi"><g data-v-378c8849=""><path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path></g></svg>
      
        </React.Fragment>
            
            
        )
        
 }

 export const IconoFiesta = () =>{

    return(
            
        <React.Fragment>
      <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="emoji sunglasses" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-emoji-sunglasses b-icon bi"><g data-v-378c8849=""><path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path></g></svg>
        </React.Fragment>
            
            
        )
        
 }

 export const IconoCapacitaciones = () =>{

    return(
            
        <React.Fragment>
     <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="clipboard check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-clipboard-check b-icon bi"><g data-v-378c8849=""><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></g></svg>   </React.Fragment>
            
            
        )
        
 }
        
 
 export const IconoAmigable = () =>{

    return(
            
        <React.Fragment>
      <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="people" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-people b-icon bi"><g data-v-378c8849=""><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></g></svg>  </React.Fragment>
            
            
        )
        
 }

 export const IconoFlexibilidad = () =>{

    return(
            
        <React.Fragment>
     <svg data-v-378c8849="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="calendar2 plus" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-calendar2-plus b-icon bi"><g data-v-378c8849=""><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"></path></g></svg>  </React.Fragment>
            
            
        )
        
 }
      
      