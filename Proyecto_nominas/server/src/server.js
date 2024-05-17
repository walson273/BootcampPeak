import express from 'express'
import router from './router.js';
import db from './config/db.js';
import cors from 'cors'

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

//server.use(cors(cors))

server.use(express.json())

server.use('/', router)

export default server