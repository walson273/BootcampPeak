import Cargos from "../models/cargos.model.js";
import Equipos from "../models/equipos.model.js";
import Usuarios from "../models/usuarios.model.js"

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


export const consultar_usuarios_id = async (req, res) => {

    const {id} = req.params;

    const usuarios = await Usuarios.findOne(
        {where: {id: id},
        include:[Cargos, Equipos],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt','contrasenia'
            ]
        }
    
    
    });


    if(!usuarios){
        return res.status(404).json({error:'Usuario no encontrado'});
    }

    res.json({ data: usuarios});


}

export const consultar_supervisor_usuario = async (req, res) => {

    const {id} = req.params;

    const usuarios = await Usuarios.findOne(
        {where: {id_equipo: id,
                    id_cargo: '5'  },
        include:[Cargos, Equipos],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt','contrasenia'
            ]
        }
    
    
    });

    if(!usuarios){
        return res.status(404).json({error:'Usuario no encontrado'});
    }

    res.json({ data: usuarios});


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