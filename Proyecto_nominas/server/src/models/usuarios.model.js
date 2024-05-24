import { DataTypes } from "sequelize";
import db from "../config/db.js";



const Usuarios = db.define(
    'usuario',
    {
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        cedula: {
            type: DataTypes.BIGINT
        },
        numero_telefonico: {
            type: DataTypes.BIGINT
        },
        correo: {
            type: DataTypes.STRING
        },
        tipo_documento: {
            type: DataTypes.STRING
        },
        contrasenia: {
            type: DataTypes.STRING
        },
        tiempo_meses: {
            type: DataTypes.INTEGER,
            default: 5
        },
        logo: {

            type: DataTypes.STRING,
            defaultValue: '1'

        },    
        //FOREIGNNNNNN
        id_cargo: {
            type: DataTypes.INTEGER
        },
        id_equipo: {
            type: DataTypes.INTEGER
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName:'Usuario',


    }
);

    export default Usuarios