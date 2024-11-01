import { Router } from "express";
import {
  borrarReserva,
  crearReserva,
  // listarReservas,
  listarReservasPorUsuario,
  obtenerReserva,
} from "../controllers/reserva.controllers.js";
import verificarJWT from "../helpers/verificaJWT.js";

const reservaRouter = Router();
reservaRouter.route("/reserva").get([verificarJWT], listarReservasPorUsuario).post([verificarJWT], crearReserva);
reservaRouter.route("/reserva/:id").get([verificarJWT],obtenerReserva).delete([verificarJWT],borrarReserva);
export default reservaRouter;
