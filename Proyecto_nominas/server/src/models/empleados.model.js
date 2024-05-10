import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Empleados = db.define(
    'empleado',
    {
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        numero_telefonico: {
            type: DataTypes.INTEGER
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName:'Empleado'
    }
)

    export default Empleados