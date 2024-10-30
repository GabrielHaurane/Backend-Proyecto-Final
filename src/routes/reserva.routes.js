import { Router } from "express";
import {
  borrarReserva,
  crearReserva,
  listarReservas,
  obtenerReserva,
} from "../controllers/reserva.controllers.js";
import verificarJWT from "../helpers/verificaJWT.js";

const reservaRouter = Router();
reservaRouter.route("/reserva").get([],listarReservas).post([],crearReserva);
reservaRouter.route("/reserva/:id").get([],obtenerReserva).delete([],borrarReserva);
export default reservaRouter;
