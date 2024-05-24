import Registro_empleado from "../components/rempleado.component";
import { mostrar_cargos } from "../services/servicioCargos";
import { mostrar_equipos } from "../services/ServicioEquipos";

export async function loader() {
    const cargos = await mostrar_cargos();
    const equipos = await mostrar_equipos();

    return [cargos, equipos]
}

export default function Registrar_empleado() {
    const body = document.getElementById("bodyy");
    //body.style.backgroundColor="red";

    return (
        <div id="fulldiv" style={{ margin: "0 auto", marginTop: "8%", padding: "0" }}>
            <Registro_empleado />
        </div>
    )
}