const { request, response } = require('express');
const Proyecto = require('../modelos/proyecto');
const TipoProyecto = require('../modelos/tipoProyecto')
const Cliente = require('../modelos/cliente')
const Universidad = require('../modelos/universidad')
const Etapa = require('../modelos/etapa')

/**
 * crea
 */
const crearProyecto = async (req = request, res = response) => {
     try{
         const data = req.body
         const { cliente, tipoProyecto,etapa,universidad  } = data
 
         const tipoProyectoBD = await TipoProyecto.findOne({
             _id: tipoProyecto._id
         })
         
         if(!tipoProyectoBD){
             return res.status(400).json({
                 msj: 'No existe tipo Proyecto'
             })
         }
         const clienteBD = await Cliente.findOne({
             _id: cliente._id
         })
         if(!clienteBD){
             return res.status(400).json({
                 msj: 'No existe cliente'
             })
         }
         const proyecto = new Proyecto(data);
         await proyecto.save();
         return res.status(201).json(proyecto);
     }catch(e){
         return res.status(500).json({
             error: e
         });
     }
 }
 
/**
 * Consultar todos los proyectos
 */
const getProyectos = async (req, res = response) => {
    try{
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        })
        .populate({
            path: 'universidad'
        })
        .populate({
            path: 'etapa'
        })
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}


const updatedProyectoId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring
    
        const proyectosBD = await Proyecto.findOne({ _id: id});
       
       if(!proyectosBD){
        return res.status(400).json({
            msj: 'No existe este proyecto'
        });
       } 
        const proyecto = await Proyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(proyecto);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}


module.exports = { 
    crearProyecto,
    getProyectos,
    updatedProyectoId
}