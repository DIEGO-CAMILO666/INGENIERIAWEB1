const {  Schema, model} = require('mongoose')

const ClienteSchema = Schema({

    nombre:{
        type:String,
        required: [true,' Cliente requerido']
    },
    email:{
        type:String,
        required: [true,' Email requerido'],
        unique: [true,'Email debe ser unico']
        
    },
    fechaCreacion:{
        type: Date, 
        default: new Date(),
    },
    fechaActualizacion:{
        type: Date, 
        default: new Date(),
    }

})

module.exports = model('Cliente',ClienteSchema)


