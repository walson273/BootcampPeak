import { createBrowserRouter } from 'react-router-dom'
import Nominass, { loader as getLoader } from './views/Nominas'
import Layout from './layouts/Layout'
import Login from './views/Login'
import Nominad from './components/nomina.component'
import Buscar from './views/Buscar'

export const router = createBrowserRouter(

    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/nominas',
                    element: <Nominass />,
                    loader: getLoader
                },
                {
                    path: '/oscar',
                    element: <Nominad />
                }
            ]
        },

        {
            path: '/login',
            element: <Login />

        },

        {
            path: '/buscar',
            element: <Buscar />

        }

    ]
)