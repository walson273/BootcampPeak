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
        <div id="fulldiv" style={{margin:"0 auto", marginTop:"8%", padding:"0"}}>
            <Registro_empleado />
        </div>
    )
}