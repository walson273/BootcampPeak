import express from 'express'
import router from './router.js';
import db from './config/db.js';

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

server.use(express.json())

server.use('/', router)

export default server