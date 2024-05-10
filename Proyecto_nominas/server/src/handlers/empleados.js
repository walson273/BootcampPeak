import Empleados from "../models/empleados.model.js"

export const consultar_empleados = async (req, res) => {
    const empleados = await Empleados.findAll({
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
    res.json({ data: empleados })
}

export const crear_empleados = async (req, res) => {
    const empleados = await Empleados.create(req.body);
    res.json({ data: empleados })
}

export const eliminar_empleados = async (req, res) => {
    const {id} = req.params;

    const empleados = await Empleados.findByPk(id);
    if(!empleados){
        return res.status(404).json({error:'Empleado no encontrado'});
    }
    await empleados.destroy();
    res.json({data:'Empleado eliminado'});
}