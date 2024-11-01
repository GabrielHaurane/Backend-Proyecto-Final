import Reserva from '../database/model/reserva.js'
import Usuario from '../database/model/usuario.js';
import Habitacion from '../database/model/habitacion.js';
import { parseISO } from 'date-fns';

// Controlador para listar reservas solo del usuario logueado
export const listarReservasPorUsuario = async (req, res) => {
  const { email } = req.query;
  try {
    // Verificar si se proporcionó un email
    if (!email) {
      return res.status(400).json({ mensaje: "El email es requerido" });
    }
    // Buscar reservas que coincidan con el email
    const reservas = await Reserva.find({ usuarioEmail: email });
    res.status(200).json(reservas);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrió un error, no se pudo listar las reservas",
    });
  }
};


export const listarReservas = async (req, res) => {
    try {
      const reservas = await Reserva.find();
      res.status(200).json(reservas);
    } catch (error) {
      console.error(error);
      res.status(404).json({
        mensaje: "Ocurrio un error, no se pudo listar las reservas",
      });
    }
  };
  export const obtenerReserva = async (req, res) => {
    try {
      console.log(req.params.id);
      const reservaBuscada = await Reserva.findById(req.params.id);
      if (!reservaBuscada) {
        return res.status(404).json({
          mensaje: "Reserva no encontrada",
        });
      }
      console.log(reservaBuscada);
      res.status(200).json(reservaBuscada);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: "Ocurrio un error, no se pudo obtener la reserva",
      });
    }
  };
  export const crearReserva = async (req, res) => {
    const { usuarioEmail, habitacionID, fechaEntrada, fechaSalida } = req.body;
    
    try {
        // Verificar si el usuario existe
        const usuario = await Usuario.findOne({ email: usuarioEmail });
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        
        // Verificar si la habitación existe
        const habitacion = await Habitacion.findById(habitacionID);
        if (!habitacion) {
            return res.status(404).json({ mensaje: "Habitación no encontrada" });
        }
        
        // Verificar que no haya reservas solapadas
        const reservasExistentes = await Reserva.find({
            habitacionID,
            $or: [
                {
                    fechaEntrada: { $lt: parseISO(fechaSalida) },
                    fechaSalida: { $gt: parseISO(fechaEntrada) }
                }
            ]
        });

        if (reservasExistentes.length > 0) {
            return res.status(400).json({ mensaje: "Ya existe una reserva en esas fechas" });
        }

        // Crear la reserva con el email
        const nuevaReserva = new Reserva({
            usuarioEmail, // Almacena el email en la reserva
            habitacionID,
            fechaEntrada: parseISO(fechaEntrada),
            fechaSalida: parseISO(fechaSalida)
        });

        await nuevaReserva.save();

        return res.status(201).json(nuevaReserva);
    } catch (error) {
        console.error("Error al crear la reserva:", error); // Imprimir el error en los registros
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};
  export const borrarReserva = async (req, res) => {
    try {
      const reservaBuscada = await Reserva.findById(req.params.id);
      if (!reservaBuscada) {
        return res.status(404).json({
          mensaje: "La reserva no fue encontrada",
        });
      }
      await Reserva.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: "La reserva fue eliminada correctamente",
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar borrar una reserva" });
    }
  };