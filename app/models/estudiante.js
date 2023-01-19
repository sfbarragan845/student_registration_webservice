const mongoose = require('mongoose');
mongoose instanceof mongoose.Mongoose;
const estudianteSchema = new mongoose.Schema({
    nombre_estudiante:{
        type: String,
    },
    cedula_estudiante:{
        type: String,
        unique:true,
        required:true
    },
    correo_estudiante:{
        type: String,
        unique:true,
        required:true
    },
    telefono_estudiante:{
        type: String,
    },
    tipo_estudiante:{
        type: String,
    },
    curso_estudiante:{
        type: String,
    },
    estado_inscripcion:{
        type: String,
    },estado_comprobante:{
        type: String,
    },comprobante:{
        type: String,
    },
},{
    timestamps:true,
    versionKey: false
})
module.exports= mongoose.model('estudiante', estudianteSchema)