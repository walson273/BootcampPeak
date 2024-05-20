import { mostrar_nominas } from "../services/ServicioNominas";
import { useLoaderData } from 'react-router-dom'

export async function loader() {
  const nominas = await mostrar_nominas()

  return nominas
}

export default function Nominass() {
  const nominas = useLoaderData()

  return (
    <div id="datos">
      {
        nominas.data.map(nomina => (
          <p key={nomina.id}>{nomina.nombre} {nomina.apellido}</p>
        ))
      }
    </div>
  )
}
