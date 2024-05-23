import * as React from 'react';
import Button from '@mui/material/Button';

export default function B_boton(info) {


    return(

        <Button variant="contained" className="Bboton" href="http://localhost:5173/menu/perfil" 
        onClick={() => { 
          console.log(info.id)
          cambiaID(info.id)
        
         }} >Modificar</Button>
        
        )

}