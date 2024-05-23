import Registro_empleado from "../components/rempleado.component";
import { mostrar_nominas } from "../services/ServicioNominas";

export async function loader() {
    const nominas = await mostrar_nominas()

    return nominas
}

export default function Registrar_empleado() {
    const body=document.getElementById("bodyy");
    //body.style.backgroundColor="red";

    return (
        <div id="fulldiv">
            <Registro_empleado />
        </div>
    )
}