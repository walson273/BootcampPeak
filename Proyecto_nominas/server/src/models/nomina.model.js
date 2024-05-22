import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Nomina = db.define(
    'nomina',
    {
        dias_trabajados: { 
            type: DataTypes.INTEGER
        }, 
        salario_dias: { 
            type: DataTypes.INTEGER
        },
        base: {
            type: DataTypes.INTEGER
        },
        bonos: {
            type: DataTypes.INTEGER
        },
        eps: {
            type: DataTypes.INTEGER
        },
        cesantias: {
            type: DataTypes.INTEGER
        },
        pension: {
            type: DataTypes.INTEGER
        },
        total_descuentos: {
            type: DataTypes.INTEGER
        },
        devengado: {
            type: DataTypes.INTEGER
        },
        total_neto: {
            type: DataTypes.INTEGER
        },
        mes: {
            type: DataTypes.STRING
        },
        anio: {
            type: DataTypes.INTEGER
        },
        //FOREIGNNNNNN 
        id_usuario: {
            type: DataTypes.INTEGER

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