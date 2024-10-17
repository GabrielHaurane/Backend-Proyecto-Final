import mongoose, {Schema} from "mongoose";

const habitacionSchema = new Schema({
    tipoHabitacion:{
        type: String,
        required: true,
        enum:['Habitacion Individual','Habitacion Doble','Habitacion Familiar','Suite Junior', 'Suite Precidencial'],
    },
    capacidad:{
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    precio:{
        type: Number,
        required: true,
        min:100,
        max:500,
    },
    servicios:{
        type: String,
        required: true,
    },
    descripcion_breve:{
        type: String,
        required: true,
        minLength: 20,
        maxLength: 300,
    },
    descripcion_amplia:{
        type: String,
        required: true,
        minLength: 30,
        maxLength: 1000,
    },
    tamanio:{
        type: Number,
        required: true,
        min: 10,
        max: 100,
    },
    imagen:{
        type: String,
        required: true,
        validate: {
            validator: (valor)=>{
                return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor)
            }
        }
    },
    disponibilidad:{
        type: Boolean,
        required: true,
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
const Habitacion = mongoose.model('habitacion', habitacionSchema)
export default Habitacion;