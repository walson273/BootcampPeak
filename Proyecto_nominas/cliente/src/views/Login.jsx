import React from "react";
import cover_bg from '/public/bg-login.png';

export default function Login() {
  return (
    <>
      <div className="l_cont">
        <div className="w-full h-screen flex items-start">
          <div className="relative w-1/2 h-full flex flex-col">
            <div className="absolute top-[20%] left-[10%] flex flex-col">
              <h1 className="text-4x1 text-black font-bold my-4">hola como estass</h1>
            </div>
          </div>


          <div className="w-1/2 h-full  flex flex-col p-20 justify-between">
            <div className="w-full h-full flex flex-col p-20 ml-10 jusfity-between border">
            <h1 className="text-base text-[black] font-semibold">brand</h1>
            <div className="w-full flex flex-col max-w-[550px] border">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-3x1 font-semibold mb-2">Login</h3>
                <p className="text-base mb-2">Bienvenida putica</p>
              </div>

              <div className="w-full flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              </div>

              <div className="w-full flex items-center justify-center">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Recuerdame hoy me tengo que ir mi amor</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Olvidaste la contraseña?</p>
              </div>

              <div className="w-full flex flex-col my-4">
                <button className="w-full text-white bg-black rounded-md p.4 text-center flex items-center justify-center">
                  Log In
                </button>

              </div>

            </div>
            <div className="w-ful flex items-center justify-center">
              <p className="text-sm font-normal text-[black]">Dont have a account? <span className="font-semibold underline underline-offset-0">holi</span></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
