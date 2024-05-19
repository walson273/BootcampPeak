import Equipos from "../models/equipos.model.js"

export const consultar_equipos = async (req, res) => {
    const equipos = await Equipos.findAll({
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
    res.json({ data: equipos })
}

export const crear_equipos = async (req, res) => {
    const equipos = await Equipos.create(req.body);
    res.json({ data: equipos })
}

export const modificar_equipos = async (req, res) => {

    const {id} = req.params;

    const equipos = await Equipos.findByPk(id);
    if(!equipos){
        return res.status(404).json({error:'Equipo no encontrado'});
    }
    await equipos.update(req.body);
    res.json({ data: equipos});


}

export const eliminar_equipos = async (req, res) => {
    const {id} = req.params;

    const equipos = await Equipos.findByPk(id);
    if(!equipos){
        return res.status(404).json({error:'Equipo no encontrado'});
    }
    await equipos.destroy();
    res.json({data:'Equipo eliminado'});
}