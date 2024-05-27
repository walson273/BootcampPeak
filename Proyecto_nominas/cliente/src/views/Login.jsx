import React, { useState } from "react";
import { login_usuarios, userByEmail } from "../services/ServicioUsuarios";
import { CgProfile } from "react-icons/cg";


export async function loader(info) {


  const usuarios = await login_usuarios(info)
  try {
    if (usuarios.response.data.error) {
      Swal.fire({
        icon: "error",
        title: `${usuarios.response.data.error}`,
        footer: '<a href="#">Por favor corrige.</a>'
      });
    }
  } catch (error) {

    console.log(usuarios.data);
    Swal.fire({
      icon: "success",
      title: `Bienvenido`,
      showConfirmButton: false
    });


    setTimeout(() => {
      location.href = "http://localhost:5173/menu";
    }, 1400);
  }


  return usuarios
}

export async function user_correo(info) {
  try {
    const usuario = await userByEmail(info)


    const texto = usuario.data.id

    return texto

  } catch (error) {
    console.log(error);
  }
}


export default function Login() {


  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');


  const enviar = async (e) => {
    e.preventDefault();
    if (correo && contraseña) {
      let datos = { "correo": correo, "contrasenia": contraseña };

      const respuesta = await loader(datos);

      if (respuesta) {
        localStorage.setItem('IDEquipo', respuesta.equipos)
        localStorage.setItem('IDUsuario', respuesta.usuario)
        localStorage.setItem('CargoUsuario', respuesta.cargo)

      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor llene todos los campos.",
        footer: '<a href="#">Todos son todos</a>'
      });
    }
  }
  return (
    <>

      <div className="l_cont">
        <div className="w-full h-screen flex items-start">
          <div className="relative w-1/2 h-full flex flex-col">
            <div className="absolute top-[20%] left-[10%] flex flex-col">
            </div>
          </div>


          <div className="w-1/2 h-full  flex flex-col p-20 justify-center items-center border">
            <div className="bg-black rounded-lg bg-opacity-25">
              <div className="flex w-[32rem] h-[40rem] flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <CgProfile className="mx-auto h-14 w-auto text-white" />
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Iniciar sesión en su cuenta</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST" onSubmit={enviar}>
                    <div>
                      <label for="email" className="block text-sm font-medium leading-6 text-white">Correo Electronico</label>
                      <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label for="password" className="block text-sm font-medium leading-6 text-white">Contraseña<a href=""></a></label>
                        <div className="text-sm">
                          <a href="#" className="font-semibold text-[#000000] hover:text-[#048EFF]">Has olvidado tu contraseña?</a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input id="password" name="password" type="password" autoComplete="current-password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <div>
                      <button type="submit" className="flex w-full justify-center rounded-md bg-[#000000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#048EFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar sesión</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
