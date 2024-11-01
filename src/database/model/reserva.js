import mongoose, {Schema} from "mongoose";

const reservadaSchema = new Schema({
    usuarioEmail: {
        type: String,
        trim: true,
        required: true
    },
    habitacionID: {
        type: Schema.Types.ObjectId,
        ref: 'habitacion',
        required: true
    },
    fechaEntrada:{
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > Date.now();
            },
            message: 'La fecha límite debe ser una fecha futura.',
        },
    },
    fechaSalida:{
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > Date.now();
            },
            message: 'La fecha límite debe ser una fecha futura.',
        },
    },
})
const Reserva = mongoose.model('reserva', reservadaSchema)
export default Reserva