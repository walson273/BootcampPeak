import Cargos from './models/cargos.model.js';
import Equipos from'./models/equipos.model.js';
import Nominas from './models/nomina.model.js';
import Usuarios from './models/usuarios.model.js';



Nominas.belongsTo(Usuarios, {foreignKey:"id_usuario"});
Usuarios.hasMany(Nominas, {foreignKey:"id_usuario"})

Usuarios.belongsTo(Cargos, {foreignKey:"id_cargo"});
Cargos.hasOne(Usuarios, {foreignKey:"id_cargo"})

Usuarios.belongsTo(Equipos, {foreignKey:"id_equipo"});
Equipos.hasOne(Usuarios, {foreignKey:"id_equipo"})
