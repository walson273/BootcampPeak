//import { mostrar_nominas } from "../services/ServicioNominas"

import axios from "axios";

export async function loader(){
  //mostrar_nominas();
  const axios = require('axios')
  try {
    const url = `${import.meta.env.VITE_URL_POST}/usuarios`
    console.log(url);
    const response = await axios.get(url)
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  return ''
}

export default function Nominass() {
  return (
    <div>Nominas</div>
  )
}
 