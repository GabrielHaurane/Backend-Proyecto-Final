import Reserva from "../database/model/reserva.js";
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
    try {
      console.log(req.body);
      const nuevaReserva = new Reserva(req.body);
      await nuevaReserva.save();
      res.status(200).json({ nuevaReserva });
      return nuevaReserva;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
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