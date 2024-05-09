import { Router } from "express";
import { consultar_todo, crear_nuevo, eliminar_nomina } from "./handlers/nomina.js";
import { body, param } from "express-validator";
import { Errores } from "./middleware/index.js";

const router = Router();

router.get('/', consultar_todo);


router.post('/',
    body('empleado').notEmpty().withMessage('El nombre del empleado es obligatorio'),
    body('cargo').notEmpty().withMessage('El cargo es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_nuevo);


router.put('/', () => {
    console.log('desde put');
});


router.patch('/:id', () => {
    console.log('desde patch');
});

router.delete('/:id',
    param('id').isInt().withMessage('El id de la nomina no existe'),
    Errores,
    eliminar_nomina);


export default router