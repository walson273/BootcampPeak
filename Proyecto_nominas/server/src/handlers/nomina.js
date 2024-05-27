import Nomina from "../models/nomina.model.js"
import Usuarios from "../models/usuarios.model.js";

export const consultar_todo = async (req, res) => {
    const nominas = await Nomina.findAll({
        order: [
            [
                'id', 'asc'
            ]
        ],
        include:[Usuarios], 
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

export const nomina_user = async (req, res) => {

    try{
        const {id_usuario} = req.body
        const nominas = await Nomina.findOne({where:{id_usuario}})
        if(!nominas){
            return res.status(404).json({error:'No hay nominas con ese usuario'})
        }
        res.json({data: nominas})
    }catch(error){
    
        console.log("No fue posible consultar la nomina");
        console.log(error);

    }

}