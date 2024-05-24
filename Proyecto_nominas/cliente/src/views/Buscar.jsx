import React, { useState, useEffect } from "react"
import { mostrar_usuarios, mostrar_usuarios_id } from "../services/ServicioUsuarios";
import { useLoaderData, useNavigate } from 'react-router-dom'
import B_nombre from '../components/B_nombre.component'
import B_foto from '../components/B_foto.component'
import B_cargo from '../components/B_cargo.component'
import B_cedula from "../components/B_cedula.component";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useUsuario } from "../usuarioContexto";

export async function loader() {
  const usuarios = await mostrar_usuarios()

  return usuarios
}




export default function Buscar() {

  const info = useLoaderData();
  const navigate = useNavigate();

  const {usuario} = useUsuario();

  console.log(usuario)
  
 const IrAPerfil = (userID) => {


  navigate(`/menu/perfil/${userID}`);

}



  const usuarios = info.data?.filter(function (dato) { return dato.id_equipo == '1'; });




  const [users, setUsers] = useState([usuarios]);
  const [busqueda, setSearch] = useState("");

  //console.log(users);

  const informacion = async () => {

    setUsers(usuarios);

  }

  const buscador = (evento) => {

    setSearch(evento.target.value)

  }

  async function perfil(info) {

    const perfiles = await mostrar_usuarios_id(info);
    console.log(info);
    console.log(perfiles);


  }

  const resultados = !busqueda ? users : users?.filter((dato) => dato.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))




  useEffect(() => {
    informacion()
  }, [])



  return (

    <>
      <div className="ListaEntera">

        <Box sx={{ '& > :not(style)': { m: 1, width: '80ch' }, }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Buscar empleado" variant="outlined" value={busqueda} onChange={buscador} />
          <Fab style={{ width: "3rem", height: "3rem" }} color="primary" aria-label="add" href="http://localhost:5173/menu/registrar_empleado">
            <AddIcon />
          </Fab>
        </Box>



        {

          resultados?.map((usuario) => (



            <section className='contenedor'>

              <>

                <B_foto foto={usuario.logo} />
                <B_nombre nombre={usuario.nombre + ' ' + usuario.apellido} />
                <B_cargo cargo={usuario.cargo?.nombre_puesto} />
                <B_cedula cedula={usuario.cedula} tipo={usuario.tipo_documento} />
                
                <Button variant="contained" className="Bboton" onClick={()=>{ IrAPerfil(usuario.id) }}
                
                
                >Modificar</Button>

              </>

            </section>


          ))
        }
      </div>
    </>


  )


}