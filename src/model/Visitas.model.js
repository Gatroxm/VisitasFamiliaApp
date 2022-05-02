const { Schema, model } = require('mongoose');

const VicitaSchema = Schema({
    codigo: {
        type: String,
        require: [true, 'El código es Requerido']
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    efectiva: {
        type: Boolean,
        default: false
    },
    nombre: {
        type: String,
        require: [true, 'El nombre es Requerido']
    },
    descripcion: {
        type: String,
        require: [true, 'La descripción es Requerida']
    },
});

module.exports = model('Vicita', VicitaSchema);