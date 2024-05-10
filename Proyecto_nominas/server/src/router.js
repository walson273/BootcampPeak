import { Router } from "express";
import { consultar_todo, crear_nuevo, eliminar_nomina } from "./handlers/nomina.js";
import { body, param } from "express-validator";
import { Errores } from "./middleware/index.js";
import { consultar_empleados, crear_empleados, eliminar_empleados } from "./handlers/empleados.js";

const router = Router();

router.get('/', consultar_todo);

router.get('/empleados/', consultar_empleados);


router.post('/',
    body('empleado').notEmpty().withMessage('El nombre del empleado es obligatorio'),
    body('cargo').notEmpty().withMessage('El cargo es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_nuevo);

router.post('/empleados/',
    body('nombre').notEmpty().withMessage('El nombre del empleado es obligatorio'),
    body('apellido').notEmpty().withMessage('El apellido del empleado es obligatorio'),
    body('numero_telefonico').notEmpty().withMessage('El numero de telefono es obligatorio'),
    body('numero_telefonico').isNumeric().withMessage('El numero de telefono es un numero'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_empleados);



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

router.delete('/empleados/:id',
    param('id').isInt().withMessage('El id del empleado no existe'),
    Errores,
    eliminar_empleados);


export default router