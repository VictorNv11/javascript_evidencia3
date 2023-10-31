    const mongoose = require('mongoose')

    const BootcampsSchema=mongoose.Schema({
    name:{
        type: String,
        required: [true,
             "el nombre es requerido"],
        unique: true,
        maxlength: [50, "Nombre de bootcamp no mayor"]     
    },
    phone: {
        type: Number,
        maxlength: [10, "telefono"]
    },
    address:{
        type: String,
        maxlength:[20,"logitud"],
        required: [true,
        "direccion requerida"],
    },
    topics:{
        type:[String],
        required: [ true,
        "temas son requeridos"],
        enum:["Frontend","backend","AI","DevOps"]
    },
    averageRating: Number,
    createAT:Date
})
module.exports=mongoose.model('Bootcamp',BootcampsSchema)
