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
    body.style.backgroundImage = "url('/public/dark-background-abstract-background-network-3d-background-7680x4320-8324.png')";
    return (
        <div id="fulldiv" style={{ margin: "0 10rem", padding: "0", paddingTop: "4%" }}>
            <Registro_empleado />
        </div>
    )
}