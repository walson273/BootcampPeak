import Nominad from "../components/nomina.component";
import { getNominas, mostrar_nominas } from "../services/ServicioNominas";
const USERACTUAL = localStorage.getItem('IDUsuario')

export async function loader() {
  const nominas = await getNominas({ "id_usuario": USERACTUAL })

  return nominas
}

export default function Nominass() {
  return (
    <Nominad />
  )
}