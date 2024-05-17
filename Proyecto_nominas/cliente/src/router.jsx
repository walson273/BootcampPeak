import {createBrowserRouter} from 'react-router-dom'
import Nominass, { loader as loader_nominas } from './views/Nominas'
import Layout from './layouts/Layout'
import Login from './views/Login'

export const router =  createBrowserRouter(

    [
        {   path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/nominas',
                    element: <Nominass/>,
                    loader: loader_nominas
                }
            ]
        },

        {
            path: '/login',
            element: <Login/>

        }
    
    ]
)