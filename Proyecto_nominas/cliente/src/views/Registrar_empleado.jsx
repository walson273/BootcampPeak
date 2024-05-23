import Registro_empleado from "../components/rempleado.component";


export default function Registrar_empleado() {
    const body=document.getElementById("bodyy");
    //body.style.backgroundColor="red";

    return (
        <div id="fulldiv" style={{margin:"0 auto", marginTop:"8%", padding:"0"}}>
            <Registro_empleado />
        </div>
    )
}