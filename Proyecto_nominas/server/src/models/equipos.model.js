import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Equipos = db.define(
    'equipo',
    {
        nombre_equipo: {
            type: DataTypes.STRING
        },
        sede: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName:'Equipo'
    }
)

    export default Equipos