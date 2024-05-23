import React, {useState, useEffect} from "react"
import { mostrar_usuarios_id } from "../services/ServicioUsuarios";
import { useLoaderData } from 'react-router-dom'
import TextField from '@mui/material/TextField';



export async function loaderID(id) {
    const usuarios = await mostrar_usuarios_id(id)
    console.log(usuarios)
  
    return usuarios
  }
  



export default function Perfil() {


   

    const info = useLoaderData();

    console.log(info);

    return (

        <>

        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        
        {<div>{info.data.nombre}</div>}
        </>
    )

        

    

}