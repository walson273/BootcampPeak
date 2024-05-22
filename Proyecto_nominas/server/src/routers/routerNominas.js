import { Router } from "express";
import { consultar_todo, crear_nuevo, eliminar_nomina } from "../handlers/nomina.js";
import { body, param } from "express-validator";
import { Errores } from "../middleware/index.js";


const routerNominas = Router();

routerNominas.get('/', consultar_todo);

routerNominas.post('/',
    body('dias_trabajados').notEmpty().withMessage('El nombre del empleado es obligatorio'),
    body('base').notEmpty().withMessage('El salario base es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_nuevo);

routerNominas.delete('/:id',
    param('id').isInt().withMessage('El id de la nomina no existe'),
    Errores,
    eliminar_nomina);

export default routerNominas;