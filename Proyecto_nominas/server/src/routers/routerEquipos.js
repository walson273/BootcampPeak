import { Router } from "express";
import { consultar_equipos, crear_equipos, eliminar_equipos, modificar_equipos } from "../handlers/equipos.js";
import { Errores } from "../middleware/index.js";
import { body, param } from "express-validator";



const routerEquipos = Router();

routerEquipos.get('/', consultar_equipos);


routerEquipos.post('/',
    body('nombre_equipo').notEmpty().withMessage('El nombre del equipo es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_equipos);

routerEquipos.patch('/:id',
    body('nombre_equipo').notEmpty().withMessage('El nombre del equipo es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    modificar_equipos);


routerEquipos.delete('/:id',
    param('id').isInt().withMessage('El id del equipo no existe'),
    Errores,
    eliminar_equipos);

export default routerEquipos;