import Nomina from "../models/nomina.model.js"

export const consultar_todo = async (req, res) => {
    const nominas = await Nomina.findAll({
        order: [
            [
                'id', 'desc'
            ]
        ],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt'
            ]
        }
    });
    res.json({ data: nominas })
}

export const crear_nuevo = async (req, res) => {
    const nominas = await Nomina.create(req.body);
    res.json({ data: nominas })
}

export const eliminar_nomina = async (req, res) => {
    const {id} = req.params;

    const nominas = await Nomina.findByPk(id);
    if(!nominas){
        return res.status(404).json({error:'Nominas no encontradas'});
    }
    await nominas.destroy();
    res.json({data:'Nomina eliminada'});
}