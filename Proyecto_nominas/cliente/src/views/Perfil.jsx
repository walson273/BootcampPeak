import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { mostrar_usuarios_id } from "../services/ServicioUsuarios";
import TextField from '@mui/material/TextField';
import P_info from '../components/P_info'




export async function loaderID(id) {
    
    const usuarios = await mostrar_usuarios_id(id)
   
  
    return usuarios
  }
  

  
export default  function Perfil() {

    //const userID = useUserIDContext();

    const { userID } = useParams();

    console.log(userID);

    //console.log(useLoaderData());

    //const info = useLoaderData()

   
    const [info, setInfo] = useState(null);

    
    useEffect(()=>{

        const init = async () => {

                const info3 = await loaderID(userID)
                
                setInfo(info3)
                console.log(info3);

        };
            init();
    },[]   
    )
    
   
   

    console.log(info);

    
    
    console.log(userID);
    //const info2 = loaderID(userID).then(function(result){return result});
    

    if(info){

        return <TablaBuscar info = {info}/>
        
    }   
       else
    return (

        <>
   
        
        </>
    )
}


const TablaBuscar = ({info}) =>
    
    {

            return(
        <>
              { <section className="perfil">
    
            <div>
            <img className='PFoto'  src= {'/public/avatar_'+ info.data.logo +'.png'} alt='logo' />
            </div>
        
             <P_info clase={'PNombre'} valor = {info.data?.nombre} label={'Nombres'} />
             <P_info clase={'Papellido'} valor = {info.data?.apellido} label={'Apellidos'} />
             <P_info clase={'PID'} valor = {info.data?.cedula} label={'Cedula'} />
             <P_info clase={'Pequipo'} valor = {info.data?.equipo.nombre_equipo} label={'Equipo'} />
             <P_info clase={'Psupervisor'} valor = {info.data?.nombre} label={'supervisor'} />
             <P_info clase={'Pcargo'} valor = {info.data?.cargo.nombre_puesto} label={'cargo'} />             
             <P_info clase={'Psede'} valor = {info.data?.equipo.sede} label={'Sede'} />

        </section> } 
        </>

            )


    }