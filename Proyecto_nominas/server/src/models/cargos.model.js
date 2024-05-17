import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Cargos = db.define(
    'cargo',
    {
       
        salario_dia: {
            type: DataTypes.INTEGER
        },
        nombre_puesto: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName:'Cargo'
    }
)

    export default Cargos