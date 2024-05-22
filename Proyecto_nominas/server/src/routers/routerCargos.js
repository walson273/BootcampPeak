import { Router } from "express";
import { consultar_cargos, crear_cargos, eliminar_cargos, modificar_cargos } from "../handlers/cargos.js";
import { Errores } from "../middleware/index.js";
import { body, param } from "express-validator";

const routerCargos = Router()

routerCargos.get('/', consultar_cargos);

routerCargos.post('/',
    body('nombre_puesto').notEmpty().withMessage('El nombre del cargo es obligatorio'),
    body('salario_dia').notEmpty().withMessage('El salario del cargo es obligatorio'),
    body('salario_dia').isNumeric().withMessage('El salario del cargo es un numero'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_cargos);

routerCargos.patch('/:id',
    body('salario_dia').isNumeric().withMessage('El salario del cargo es un numero'),
    Errores,
    modificar_cargos);


routerCargos.delete('/:id',
    param('id').isInt().withMessage('El id del cargo no existe'),
    Errores,
    eliminar_cargos);

export default routerCargos;