import {createBrowserRouter} from 'react-router-dom'
import Nominass, { loader as loader_nominas } from './views/Nominas'
import Layout from './layouts/Layout'
import Login from './views/Login'
import Nominad from './components/nomina.component'

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
                    path: '/oscar',
                    element:<Nominad/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>

        }
    ]
)