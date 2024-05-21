import Cargos from "../models/cargos.model.js"

//import {Cargos} from "../models/index.models.js";

export const consultar_cargos = async (req, res) => {
    const cargos = await Cargos.findAll({
        order: [
            [
                'id', 'asc'
            ]
        ],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt'
            ]
        }
    });
    res.json({ data: cargos })
}

export const crear_cargos = async (req, res) => {
    const cargos = await Cargos.create(req.body);
    res.json({ data: cargos })
}

export const modificar_cargos = async (req, res) => {

    const {id} = req.params;

    const cargos = await Cargos.findByPk(id);
    if(!cargos){
        return res.status(404).json({error:'Cargo no encontrado'});
    }
    await cargos.update(req.body);
    res.json({ data: cargos});


}

export const eliminar_cargos = async (req, res) => {
    const {id} = req.params;

    const cargos = await Cargos.findByPk(id);
    if(!cargos){
        return res.status(404).json({error:'Cargo no encontrado'});
    }
    await cargos.destroy();
    res.json({data:'Cargo eliminado'});
}