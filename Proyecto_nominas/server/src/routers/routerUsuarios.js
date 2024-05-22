import { Router } from "express";
import { consultar_usuarios, crear_usuarios, eliminar_usuarios, modificar_usuarios, consultar_usuarios_id } from "../handlers/usuarios.js";
import { body, param } from "express-validator";
import { Errores } from "../middleware/index.js";

const routerUsuarios = Router()

routerUsuarios.get('/', consultar_usuarios);

routerUsuarios.get('/:id',  param('id').isInt().withMessage('El id del usuario no existe'), Errores, consultar_usuarios_id);

routerUsuarios.post('/',
    body('nombre').notEmpty().withMessage('El nombre del usuario es obligatorio'),
    body('apellido').notEmpty().withMessage('El apellido del usuario es obligatorio'),
    body('numero_telefonico').notEmpty().withMessage('El numero de telefono es obligatorio'),
    body('numero_telefonico').isNumeric().withMessage('El numero de telefono es un numero'),
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    crear_usuarios);

routerUsuarios.patch('/:id',
    //Posible creacion de mas errores como "isNumeric" o ".optional" para mandar vacio
    Errores,
    modificar_usuarios
);


routerUsuarios.delete('/:id',
    param('id').isInt().withMessage('El id del usuario no existe'),
    Errores,
    eliminar_usuarios
);

export default routerUsuarios