import {createBrowserRouter} from 'react-router-dom'
import Nominass, { loader as loader_nominas } from './views/Nominas'
import Layout from './layouts/Layout'
import Login from './views/Login'
import Nominad from './components/nomina.component'
import Menu from './views/Menu'

export const router =  createBrowserRouter(

    [
        {   path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/nominas',
                    element: <Nominass/>,
                    loader: loader_nominas
                },
                {
                    path: '/menu',
                    element: <Menu/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>

        },


    ]
)