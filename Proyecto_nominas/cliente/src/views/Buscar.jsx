import React from "react"
import { mostrar_cargos } from "../services/ServicioCargos";
import { useLoaderData } from 'react-router-dom'

import B_nombre from '../components/B_nombre.component'
import B_foto from '../components/B_foto.component'
import B_cargo from '../components/B_cargo.component'
import B_ID from '../components/B_ID.component'

export async function loader() {
    const cargos = await mostrar_cargos()
  
    return cargos
  }
  

export default function Buscar () {

  const cargos = useLoaderData()

return (

     <>
    <div class="ListaEntera">
      
            <section className='contenedor'>
            <>
          
          <div>
          {
          cargos.data.map(cargo => (
          <p key={cargo.id}>{cargo.nombre_puesto} {cargo.salario}</p>
          ))
           }
         
            
          </div>
            <B_foto />
            <B_nombre />
            <B_cargo />
            <B_ID />
           
            </>
                
          </section>
    </div>     
 </>


)


}