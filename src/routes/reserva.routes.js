import { Router } from "express";
import {
  borrarReserva,
  crearReserva,
   listarReservas,
  listarReservasPorUsuario,
  obtenerReserva,
} from "../controllers/reserva.controllers.js";
import verificarJWT from "../helpers/verificaJWT.js";
import verificarAdmin from "../helpers/verificarAdmin.js";

const reservaRouter = Router();
reservaRouter.route("/reserva").get([verificarJWT], listarReservasPorUsuario).post([verificarJWT], crearReserva);
reservaRouter.route("/reservasAdmin").get([verificarJWT, verificarAdmin],listarReservas)
reservaRouter.route("/reserva/:id").get([verificarJWT],obtenerReserva).delete([verificarJWT],borrarReserva);
export default reservaRouter;
