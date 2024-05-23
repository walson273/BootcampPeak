import React, {useState, useEffect} from "react"
import { mostrar_usuarios_id } from "../services/ServicioUsuarios";
import { useLoaderData } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { useUserIDContext } from "../UserIDProvider";
 




export async function loaderID(id) {
    
    const usuarios = await mostrar_usuarios_id(id)
   
  
    return usuarios
  }
  

  
export default  function Perfil() {

    const userID = useUserIDContext();

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

        return <Child info = {info}/>
        
    }   
       else
    return (

        <>
   
        
        </>
    )

  

        

    

}


const Child = ({info}) =>
    
    {

            return(
        <>
              { <section className="perfil">
        

            <div>
            {<img className='PFoto'  src= {'../public/avatar_'+ info?.data.logo +'.png'} alt='logo' />}
            </div>
            

            <div>
                    <TextField className="cajaTexto PNombre"
                    disabled
                    id="outlined-read-only-input"
                    label="Nombre"
                    defaultValue= {info.data?.nombre}
                    />
            </div>
            
            <div>
                    <TextField className="cajaTexto PApellido"
                    disabled
                    id="outlined-disabled"
                    label="apellido"
                    defaultValue= {info.data?.apellido}
                    />
            </div>
            
            <div>
                    <TextField className="cajaTexto PID"
                    disabled
                    id="outlined-disabled"
                    label="Documento"
                    defaultValue= {info.data?.cedula}
                    />
            </div>

            
            <div>
                    <TextField className="cajaTexto Pequipo"
                    disabled
                    id="outlined-disabled"
                    label="Equipo"
                    defaultValue= {info.data.equipo.nombre_equipo}
                    />
            </div>

                    
            <div>
                    <TextField className="cajaTexto Psupervisor"
                    disabled
                    id="outlined-disabled"
                    label="Supervisor"
                    defaultValue= {info.data.equipo.nombre_equipo}
                    />
            </div>

                    
            <div>
                    <TextField className="cajaTexto Pcargo"
                    disabled
                    id="outlined-disabled"
                    label="Cargo"
                    defaultValue= {info.data.cargo.nombre_puesto}
                    />
            </div>    
                
            <div>
                    <TextField className="cajaTexto Psede"
                    disabled
                    id="outlined-disabled"
                    label="Sede"
                    defaultValue= {info.data.equipo.sede}
                    />
            </div>     

        </section> } 
        </>

            )


    }