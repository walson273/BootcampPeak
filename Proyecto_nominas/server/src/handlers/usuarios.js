import Cargos from "../models/cargos.model.js";
import Equipos from "../models/equipos.model.js";
import Usuarios from "../models/usuarios.model.js"

//import {Usuarios} from "../models/index.models.js";

export const consultar_usuarios = async (req, res) => {
    const usuario = await Usuarios.findAll({
        order: [
            [
                'id', 'desc'
            ]
        ],
        include:[Cargos, Equipos],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt'
            ]
        }
    });
    res.json({ data: usuario })
}

export const crear_usuarios = async (req, res) => {
    const usuarios = await Usuarios.create(req.body);
    res.json({ data: usuarios })
}


export const modificar_usuarios = async (req, res) => {

    const {id} = req.params;

    const usuarios = await Usuarios.findByPk(id);
    if(!usuarios){
        return res.status(404).json({error:'Usuario no encontrado'});
    }
    await usuarios.update(req.body);
    res.json({ data: usuarios});


}

export const eliminar_usuarios = async (req, res) => {
    const {id} = req.params;

    const usuarios = await Usuarios.findByPk(id);
    if(!usuarios){
        return res.status(404).json({error:'Usuario no encontrado'});
    }
    await usuarios.destroy();
    res.json({data:'Usuario eliminado'});
}