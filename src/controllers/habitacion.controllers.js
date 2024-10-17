import Habitacion from "../database/model/habitacion.js";
export const crearHabitacion = async(req,res)=>{
    try {
        console.log(req.body)
        const habitacionNueva = new Habitacion(req.body)
        await habitacionNueva.save()
        res.status(201).json({
            mensaje: "La habitacion fue creada correctamente",
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
        mensaje: "Ocurrio un error, no se pudo crear la habitacion",
    });
    }
}
export const borrarHabitacion = async (req,res)=>{
    try {
        const habitacionBuscada = await Habitacion.findById(req.params.id);
        if (!habitacionBuscada) {
            return res.status(404).json({
                mensaje: "La habitacion no fue encontrado",
              });
        }
        await Habitacion.findByIdAndDelete(req.params.id);
        res.status(200).json({
        mensaje: "La habitacion fue borrada correctamente",
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({
        mensaje: "Ocurrio un error, no se pudo borrar la habitacion",
    });
    }
}
export const editarHabitacion = async (req,res)=>{
    try {
        const habitacionBuscada = await Habitacion.findById(req.params.id)
        if (!habitacionBuscada) {
            return res.status(404).json({
            mensaje: "La habitacion no fue encontrado",
            });
        }
        await Habitacion.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "La habitacion fue editado correctamente",
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({
        mensaje: "Ocurrio un error, no se pudo editar la habitacion",
        });
    }
}
export const listarHabitacion = async (req,res)=>{
    try {
        const arrayHabitaciones = await Habitacion.find()
        res.status(200).json(arrayHabitaciones)
    } catch (error) {
        console.error(error);
        res.status(500).json({
        mensaje: "Ocurrio un error, no se encontraron las habitaciones",
    });
    }
}
export const obtenerHabitacion = async (req,res)=>{
    try {
        console.log(req.params.id)
        const habitacionBuscada = await Habitacion.findById(req.params.id)
        if (!habitacionBuscada) {
            return res.status(404).json({
                mensaje: "La habitacion no fue encontrado",
                });
        }
        res.status(200).json(habitacionBuscada)
    } catch (error) {
        console.error(error);
        res.status(500).json({
        mensaje: "Ocurrio un error, no se pudo obtener la habitacion",
    });
    }
}