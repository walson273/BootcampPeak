import express from 'express'
import db from './config/db.js';
import cors from 'cors'
import routerUsuarios from './routers/routerUsuarios.js';
import routerEquipos from './routers/routerEquipos.js';
import routerCargos from './routers/routerCargos.js';
import routerNominas from './routers/routerNominas.js';

async function db_connection(){
    try {
        await db.authenticate();
        db.sync();
        console.log('Coneccion exitosa a la db');
    } catch (error) {
        console.log(error);
    }
}

db_connection();

const server = express();

const corsOptions = {
    origin: function (origin, callback) {
        if (origin === 'http://localhost:5173') {
            callback(null, true)
        }else{
            callback(new Error('Eorror de cors'))
        }
    }
}

server.use(cors(corsOptions))

server.use(express.json())

server.use('/usuarios', routerUsuarios)
server.use('/cargos', routerCargos)
server.use('/equipos', routerEquipos)
server.use('/nominas', routerNominas)


export default server