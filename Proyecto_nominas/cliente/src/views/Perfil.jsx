import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";

import { mostrar_usuarios_id, mostrar_supervisor_usuario } from "../services/ServicioUsuarios";
import P_info from '../components/P_info'
import { Button } from "@mui/material";




//export async function loaderPatch(info) {
//    const usuarios = await modificar_usuarios(info)

    //return usuarios}

export async function loaderID(id) {
    
    const usuarios = await mostrar_usuarios_id(id)
     
    return usuarios
  }
  

  
export async function loaderSupervisor(id) {
    
    const usuarios = await mostrar_supervisor_usuario(id)
   
  
    return usuarios
  }
  
export default  function Perfil() {

    //const userID = useUserIDContext();

    const { userID } = useParams();


    //console.log(useLoaderData());

    //const info = useLoaderData()

   
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
    
   
  
    console.log(supervisor);
    console.log(info);
  
    
    console.log(userID);
    //const info2 = loaderID(userID).then(function(result){return result});
    

    if(info){

        return( 
        <>
                
                <TablaBuscar info = {info} supervisor = {supervisor}/>
        </>
        )
        
    }   
       else
    return (

        <>
   
        
        </>
    )
}


const TablaBuscar = ({info , supervisor}) =>
    
    {

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

            <Button variant="contained"  className="btVolBus" onClick={()=>{Buscar()}}> Volver a buscar</Button>
            <Button variant="contained" color="success" className="btModificar" onClick={()=>{Modificar(info.data?.id)}}> Modificar Perfil</Button>
             
              <section className="perfil">
            
            <div>
            <img className='PFoto'  src= {'/public/avatar_'+ info.data.logo +'.png'} alt='logo' />
            </div>
        
             <P_info clase={'PNombre'} valor = {info.data?.nombre} label={'Nombres'} />
             <P_info clase={'Papellido'} valor = {info.data?.apellido} label={'Apellidos'} />
             <P_info clase={'PID'} valor = {info.data?.cedula} label={'Cedula'} />
             <P_info clase={'Pequipo'} valor = {info.data?.equipo.nombre_equipo} label={'Equipo'} />
             <P_info clase={'Psupervisor'} valor = {supervisor.data?.nombre} label={'supervisor'} />
             <P_info clase={'Pcargo'} valor = {info.data?.cargo.nombre_puesto} label={'cargo'} />             
             <P_info clase={'Psede'} valor = {info.data?.equipo.sede} label={'Sede'} />

             

        </section>
        
        </div> } 
        </>

            )


    }