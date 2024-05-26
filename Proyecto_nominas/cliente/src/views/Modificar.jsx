import React, {useState, useEffect} from "react"
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import P_info from "../components/P_info";
import { mostrar_usuarios_id, mostrar_supervisor_usuario, modificar_usuarios_id } from "../services/ServicioUsuarios";
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useUsuarioContexto } from "../usuarioContexto";

export async function loaderID(id) {    
    const usuarios = await mostrar_usuarios_id(id)     
    return usuarios
  }
  
 
export async function loaderSupervisor(id) {    
    const usuarios = await mostrar_supervisor_usuario(id)
    return usuarios
  }

export async function loader(datos){

    const usuarios = await modificar_usuarios_id(datos)
    return usuarios

}



export default  function Modificar() {

    const { userID } = useParams();
    const [info, setInfo] = useState(null);
    const [supervisor, setSuper] = useState(null);

    
  const {login} = useUsuarioContexto ();
    
  console.log(login);
  
    useEffect(()=>{

        const init = async () => {

                const info_api = await loaderID(userID)
                
                const getSupervisor = await loaderSupervisor(info_api.data.id_equipo)
                
                setInfo(info_api);
                setSuper(getSupervisor);

                

        };
            init();
    },[]   
    )

    if(info){

        return( 
        <>
                
                <TablaBuscar info = {info} supervisor = {supervisor}/>
        </>
        )
        
    }   
       else
    return (

        <>
   
        
        </>
    )
}


const TablaBuscar = ({info , supervisor}) =>
    
    {

        const navigate = useNavigate();
        const userID = useParams();
        const vercargos = useLoaderData();

        const listCargos = vercargos[0].data;
        const listEquipos = vercargos[1].data
       
   

        const Buscar = () => {
    
            navigate('/menu/buscar');
           }


        const Modificar = (userID) => {

            navigate(`/menu/perfil/${userID}`)
        }

    
     const [formData, setFormData] = useState({


                    "id_cargo":"",
                    "id_equipo":"",
                    "numero_telefonico":"",
                    "correo":"",


            })

        

        const Cambiar = (e) => {


            const {name, value} = e.target;

            setFormData((prevData) => ({

                ...prevData,
                [name]: value,}));

            };

       

        const Guardar = (e) => {

            e.preventDefault();
            console.log('Form Data:', formData);
            console.log(info.data?.id);
            
            formData.usuarioID = userID;
            loader(formData);

        }

            return(
        <>
                       
              
              {           
                

                
              
              
            <div>

            <Button variant="contained"  className="btVolBus" onClick={()=>{Buscar()}}> Volver a buscar</Button>
            <Button variant="contained" color="success" className="btVolPer" onClick={()=>{Modificar(info.data?.id)}}> Volver a perfil</Button>
            
             
              <section className="modificarPerfil Mmodificar">
            
         
        
             <P_info clase={'MNombre'} valor = {info.data?.nombre} label={'Nombres'} />
             <P_info clase={'Mfoto'} valor = {info.data?.apellido} label={'Apellidos'} />
             <P_info clase={'MID'} valor = {info.data?.cedula} label={'Cedula'} />
            
             <P_info clase={'Msupervisor'} valor = {supervisor.data?.nombre} label={'supervisor'} />
             <P_info clase={'Msede'} valor = {info.data?.equipo.sede} label={'Sede'} />
   
             <form onSubmit={Guardar} className={'ModForm'}>
                         
             <TextField className={'cajaTexto'} onChange={Cambiar} name={"numero_telefonico"} type={"number"} label={'Numero'} inputProps={{style: {fontSize: 32}}} InputLabelProps={{style: {fontSize: 26}}}  required/>
             <TextField className={'cajaTexto Mcorreo'} onChange={Cambiar} name={"correo"}  type={"email"} label={'Correo'} inputProps={{style: {fontSize: 32}}} InputLabelProps={{style: {fontSize: 26}}} required />

             {/* <TextField className={'cajaTexto'} onChange={Cambiar} name={"id_cargo"} defaultValue = {info.data?.cargo.nombre_puesto} label={'cargo'}  inputProps={{style: {fontSize: 32}}} InputLabelProps={{style: {fontSize: 26}}} required /> 
             <TextField className={'cajaTexto'} onChange={Cambiar} name={"id_equipo"} defaultValue = {info.data?.equipo.nombre_equipo} label={'Equipo'} inputProps={{style: {fontSize: 32}}} InputLabelProps={{style: {fontSize: 26}}} required/>
             */}

            <div className="mb-4">

               <FormControl required>
               <InputLabel>
                    Cargo
                </InputLabel>

                <Select
                    labelId="Cargo"
                    name="id_cargo"                    
                    onChange={Cambiar}
                    className="Mcargo"
                          
                >
                    <MenuItem value="">Elegir...</MenuItem>

                    {
                        listCargos.map((item, index) => [
                            
                                <MenuItem key={index} value={item.id} > {item.nombre_puesto}</MenuItem>
                            
                        ])
                    }
                    
                </Select>  
                
               </FormControl> 
                
            </div>
            <div className="mb-4">
                <FormControl required>
                <InputLabel>
                    Equipo
                </InputLabel>
                <Select
                    labelId="Equipo"
                    name="id_equipo"
                    value={formData.id_equipo}
                    onChange={Cambiar}
                    className="Mequipo"
                    
                >
                    <MenuItem value="">Elegir...</MenuItem>

                    {
                        listEquipos.map((item, index) => [
                          
                                <MenuItem key={index} value={item.id}>{item.nombre_equipo}</MenuItem>
                          
                        ])
                    }
                </Select>

                </FormControl>
                
            </div>
             

             <Button type="submit" color="warning" className="btEnviar" variant="contained" > Guardar </Button>
             </form>
            
             

        </section>
        
        </div> } 
        </>

            )


    }
