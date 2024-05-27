import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";
import { type_user } from "../services/ServicioUsuarios";
import { mostrar_usuarios_id, mostrar_supervisor_usuario } from "../services/ServicioUsuarios";
import P_info from '../components/P_info'
import { Button } from "@mui/material";
import ACCESO_DENEGADO from "../components/ACCESO_DENEGADO";



export async function loaderID(id) {
    
    const usuarios = await mostrar_usuarios_id(id)
     
    return usuarios
  }
  

  
export async function loaderSupervisor(id) {
    
    const usuarios = await mostrar_supervisor_usuario(id)
   
  
    return usuarios 
  }


export async function type_username(info) {
    const type_u = await type_user(info);
    const h = type_u.data.id_cargo;
   // console.log(h);
    return h;
 }
  

export default  function Perfil() {

    
  
  const cargoIDUsuario = localStorage.getItem('CargoUsuario') 
  const USERACTUAL = localStorage.getItem('IDUsuario')

    const { userID } = useParams();
    const [info, setInfo] = useState(null);
    const [supervisor, setSuper] = useState(null);

    
    useEffect(()=>{

        const init = async () => {

                const info_api = await loaderID(userID)
                
                const getSupervisor = await loaderSupervisor(info_api.data.id_equipo)
                
                setInfo(info_api);
                setSuper(getSupervisor);

                

        };
            init();
    },[]   
    )

    
    if(info)
        {

                
        if(cargoIDUsuario != 5)
            {

                console.log('No-admin');
            if(userID == USERACTUAL)
                {   
                    return( 
                <>
                        
                        <TablaBuscar info = {info} supervisor = {supervisor} cargoIDUsuario={cargoIDUsuario}/>
                </>
                )
                }
                else
                {
                    return(

                        <>
                           <ACCESO_DENEGADO></ACCESO_DENEGADO>
                        </>
                    )
                }


            }
        else
        {   
            console.log('admin');
            return( 
            <>
                    
                    <TablaBuscar info = {info} supervisor = {supervisor} cargoIDUsuario={cargoIDUsuario}/>
            </>
            )
        } 

        
        
    }   
       else
    return (

        <>
   
        
        </>
    )
}


const TablaBuscar = ({info , supervisor, cargoIDUsuario}) =>
    
    {
       console.log(cargoIDUsuario);

        const navigate = useNavigate();

        const Buscar = () => {
    
            navigate('/menu/buscar');
           }


        const Modificar = (userID) => {

            navigate(`/menu/perfil/modificar/${userID}`)
        }
        
      
            return(
        <>
                      
              
              {           
                

                
              
              
            <div>
            
               
               { cargoIDUsuario == 5 &&  <Button variant="contained" color="success" className="btModificar" onClick={()=>{Modificar(info.data?.id)}}> Modificar Perfil</Button>
                }
                 
                         
            <Button variant="contained"  className="btVolBus" onClick={()=>{Buscar()}}> Volver a buscar</Button>
            
              <section className="perfil">
            
              <div className='PFoto'>
            <img   src= {'/public/avatar_'+ info.data.logo +'.png'} alt='logo' />
            <h1>{info.dato?.estado}</h1>
            </div>
        
             <P_info clase={'PNombre'} valor = {info.data?.nombre} label={'Nombres'} />
             <P_info clase={'Papellido'} valor = {info.data?.apellido} label={'Apellidos'} />
             <P_info clase={'PID'} valor = {info.data?.cedula} label={'Cedula'} />
             <P_info clase={'Pequipo'} valor = {info.data?.equipo.nombre_equipo} label={'Equipo'} />
             <P_info clase={'Psupervisor'} valor = {supervisor.data?.nombre} label={'Supervisor'} />
             <P_info clase={'Pcargo'} valor = {info.data?.cargo.nombre_puesto} label={'Cargo'} />             
             <P_info clase={'Psede'} valor = {info.data?.equipo.sede} label={'Sede'} />
             <P_info clase={'Pnumero'} valor = {info.data?.numero_telefonico} label={'Numero'} />
             <P_info clase={'Pcorreo'} valor = {info.data?.correo} label={'Correo'} />

             

        </section>
        
        </div> } 
        </>

            )
           


    }