
const {Usuarios} = require  ("../models/usuarios.model.js");
const {Cargos} = require ("../models/cargos.model.js");
const {Equipos} = require("./equipos.model.js");
const {Nomina} = require ("./nomina.model.js");


Cargos.hasMany(Usuarios), { onDelete: 'cascade', foreignKey : "id_cargo"};
Usuarios.belongsTo(Cargos, {foreignKey : "id_cargo"});


module.exports = {

    Usuarios,
    Cargos,
    Equipos,
    Nomina

};