import { createBrowserRouter } from 'react-router-dom'
import Nominass, { loader as getLoader } from './views/Nominas'
import Login from './views/Login'
import React from 'react';
import Buscar, { loader as getLoader2 } from './views/Buscar'
import Modificar from './views/Modificar'
import Perfil from './views/Perfil'
import Menu from './views/Menu'
import Registrar_empleado, { loader as getLoaderRegistro } from './views/Registrar_empleado'

export const router = createBrowserRouter(
    [

        {
            path: '/menu',
            element: <Menu />,
            children: [
                {
                    path: '/menu/perfil/:userID',
                    element:

                        <Perfil />,
                },
                {
                    path: '/menu/perfil/modificar/:userID',
                    element: <Modificar />,
                    loader: getLoaderRegistro
                },
                {
                    path: '/menu/buscar',
                    element:
                        <Buscar />
                    ,
                    loader: getLoader2
                },
                {
                    path: '/menu/ver_nominas',
                    element: <Nominass />,
                    loader: getLoader
                },
                {
                    path: '/menu/registrar_empleado',
                    element: <Registrar_empleado />,
                    loader: getLoaderRegistro
                }
            ]
        },
            {
                path: '/',
                element: <Login />,    
            }
    ]
)