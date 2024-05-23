import { createBrowserRouter } from 'react-router-dom'
import Nominass, { loader as getLoader } from './views/Nominas'
import Layout from './layouts/Layout'
import Login from './views/Login'
import React from 'react';
import Buscar, {loader as getLoader2} from './views/Buscar'
import Perfil, {loaderID as getLoaderID} from './views/Perfil'

import Menu from './views/Menu'
import Registrar_empleado from './views/Registrar_empleado'


export const router = createBrowserRouter(


    [

        {   path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/ver_nominas',
                    element: <Nominass />,
                    loader: getLoader
                }
            ]
        },
        {
            path: '/menu',
            element: <Menu/>,
            children: [

                {
                    path: '/menu/perfil/:userID',
                    element: 
                              
                                    <Perfil  />
                              
                              
                     ,
                    

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
                }
            ]
            
        },
        {
            path: '/login',
            element: <Login />

        },
        {
            path: '/registrar_empleado',
            element: <Registrar_empleado />

        },
   
    ]
)