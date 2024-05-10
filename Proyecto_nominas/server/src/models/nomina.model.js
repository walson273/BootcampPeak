import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Nomina = db.define(
    'nomina',
    {
        empleado: {
            type: DataTypes.STRING
        },
        cargo: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName:'Nomina'
    }
)

    export default Nomina