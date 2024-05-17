import { Router } from "express";
import { consultar_todo, crear_nuevo, eliminar_nomina } from "./handlers/nomina.js";
import { body, param } from "express-validator";
import { Errores } from "./middleware/index.js";
import { consultar_usuarios, crear_usuarios, eliminar_usuarios } from "./handlers/usuarios.js";
import { consultar_cargos, crear_cargos, eliminar_cargos } from "./handlers/cargos.js";
import { consultar_equipos, crear_equipos, eliminar_equipos } from "./handlers/equipos.js";

const router = Router();

router.get('/', consultar_todo);
router.get('/usuarios/', consultar_usuarios);
router.get('/cargos/', consultar_cargos);
router.get('/equipos/', consultar_equipos);


//nomina
router.post('/',
    body('dias_trabajados').notEmpty().withMessage('El nombre del empleado es obligatorio'),
    body('base').notEmpty().withMessage('El cargo es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_nuevo);

router.post('/usuarios/',
    body('nombre').notEmpty().withMessage('El nombre del usuario es obligatorio'),
    body('apellido').notEmpty().withMessage('El apellido del usuario es obligatorio'),
    body('numero_telefonico').notEmpty().withMessage('El numero de telefono es obligatorio'),
    body('numero_telefonico').isNumeric().withMessage('El numero de telefono es un numero'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_usuarios);

router.post('/cargos/',
    body('sede').notEmpty().withMessage('El nombre del cargo es obligatorio'),
    body('salario_dia').notEmpty().withMessage('El salario del cargo es obligatorio'),
    body('salario_dia').isNumeric().withMessage('El salario del cargo es un numero'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_cargos);

router.post('/equipos/',
    body('nombre_equipo').notEmpty().withMessage('El nombre del equipo es obligatorio'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_equipos);



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

router.delete('/usuarios/:id',
    param('id').isInt().withMessage('El id del usuario no existe'),
    Errores,
    eliminar_usuarios);

router.delete('/cargos/:id',
    param('id').isInt().withMessage('El id del cargo no existe'),
    Errores,
    eliminar_cargos);

router.delete('/equipos/:id',
    param('id').isInt().withMessage('El id del equipo no existe'),
    Errores,
    eliminar_equipos);


export default router