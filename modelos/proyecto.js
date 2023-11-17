const {  Schema, model} = require('mongoose')

const ProyectoSchema = Schema({

    nombre:{
        type:String,
        required: [true,' Nombre requerido'],
        unique: true
    },
    valor:{
        type: String,
        required: [true,' Valor requerido']
    },
    fechaEntrega:{
        type: Date, 
        default: new Date()
    },
    fechaCreacion:{
        type: Date, 
        default: new Date(),
    },
    fechaActualizacion:{
        type: Date, 
        default: new Date(),
    },

    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    etapa:{
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    tipoProyecto:{
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad:{
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    }

})

module.exports = model('Proyecto',ProyectoSchema)