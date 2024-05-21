import React, {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { mostrar_usuarios } from "../services/ServicioUsuarios";
import { useLoaderData } from 'react-router-dom'
import B_nombre from '../components/B_nombre.component'
import B_foto from '../components/B_foto.component'
import B_cargo from '../components/B_cargo.component'
import B_cedula from "../components/B_cedula.component";
import List from "@mui/material/List";

export async function loader() {
    const usuarios = await mostrar_usuarios()
  
    return usuarios
  }

  


export default function Buscar () {

  const info = useLoaderData();

  
 
  const usuarios = info.data?.filter( function (dato) 
    
    { return dato.id_equipo == '1'; });
    

     

 
  const [users, setUsers] = useState([usuarios]); 
  const [busqueda, setSearch] = useState("");

  console.log(users);

  const informacion = async () => {
    
    setUsers(usuarios);
    
  }
     
  const buscador = (evento) => {

    setSearch(evento.target.value)
    
  }

  const resultados = !busqueda ? users : users?.filter((dato)=> dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))

   
  

  useEffect( ()=> {
    informacion()
  }, [])

  

return (

     <>
    <div className="ListaEntera">
                           
    <Box    sx={{ '& > :not(style)': { m: 1, width: '80ch' },  }}
      noValidate
      autoComplete="off"
      >
      <TextField id="outlined-basic" label="Buscar empleado" variant="outlined" value={busqueda} onChange={buscador} />
     
    </Box>


          
          {
           
          resultados?.map( (usuario) => (
             
            <section className='contenedor'>

          <>
              {console.log(usuario)}  
              <B_foto      foto= {usuario.foto} />
              <B_nombre   nombre = {usuario.nombre + ' ' +usuario.apellido} />
              <B_cargo     cargo={usuario.cargo?.nombre_puesto} />
              <B_cedula    cedula={usuario.cedula}/>

           </>
                     
           </section>
            
          
          ))
           }                
    </div>     
 </>


)


}