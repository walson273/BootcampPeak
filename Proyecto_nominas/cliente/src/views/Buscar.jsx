import React from "react"
import B_nombre from '../components/B_nombre.component'
import B_foto from '../components/B_foto.component'
import B_cargo from '../components/B_cargo.component'
import B_ID from '../components/B_ID.component'

export default function Buscar () {

return (

     <>
    <div class="ListaEntera">
            <section className='contenedor'>
            <>
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