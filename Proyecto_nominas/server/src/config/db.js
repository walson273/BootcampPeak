import { Sequelize } from "sequelize";

const db = new Sequelize ('postgres://prueba_swli_user:TMlC3pJnWIhNMtImWheg58gmS7Qr20Dn@dpg-cou2olq0si5c7397g4vg-a.oregon-postgres.render.com/prueba_swli?ssl=true', {models:['../models/**/*.js']});



export default db