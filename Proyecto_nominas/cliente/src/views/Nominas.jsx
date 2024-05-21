import Nominad from "../components/nomina.component";
import { mostrar_nominas } from "../services/ServicioNominas";
import { useLoaderData } from 'react-router-dom'

export async function loader() {
  const nominas = await mostrar_nominas()

  return nominas
}

export default function Nominass() {
  return (
    <Nominad/>
  )
}
