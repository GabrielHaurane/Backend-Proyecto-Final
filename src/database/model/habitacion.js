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
        min: 20,
        max: 300,
    },
    descripcion_amplia:{
        type: String,
        required: true,
        min: 30,
        max: 1000,
    },
    tamanio:{
        type: Number,
        required: true,
    },
    imagen:{
        type: String,
        required: true,
    },
    disponibilidad:{
        type: Boolean,
        required: true,
    },
    fechaEntrada:{
        type: Date,
        required: true,
    },
    fechaSalida:{
        type: Date,
        required: true,
    },
})