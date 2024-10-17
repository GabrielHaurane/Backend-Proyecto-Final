habitaciones


 dev
import mongoose from "mongoose";

const mongodb = process.env.MONGODB
mongoose.connect(mongodb)
 habitaciones
const connexion = mongoose.connection;

connexion.once('open', ()=>{
    console.info('BD conectada')
})

const connexion = mongoose.connection

connexion.once('open', ()=>{
    console.info('BD Conectada')
})
 dev
