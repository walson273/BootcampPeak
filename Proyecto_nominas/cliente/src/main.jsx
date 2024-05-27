import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import  UsuarioProvider from './usuarioContexto'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UsuarioProvider>
        <RouterProvider router={router}/>
    </UsuarioProvider>
    ,
)
