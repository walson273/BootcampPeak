import { createBrowserRouter } from 'react-router-dom'
import Nominass, { loader as getLoader } from './views/Nominas'
import Layout from './layouts/Layout'
import Login from './views/Login'

import Buscar, {loader as getLoader2} from './views/Buscar'
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
            path: '/buscar',
            element: <Buscar />,
            loader: getLoader2

        },
        {
            path: '/registrar_empleado',
            element: <Registrar_empleado />,
            loader: getLoader2

        },
    ]
)