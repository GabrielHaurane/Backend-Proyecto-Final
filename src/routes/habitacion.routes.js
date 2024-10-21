import { Router } from "express";
import {
  borrarHabitacion,
  crearHabitacion,
  editarHabitacion,
  listarHabitacion,
  obtenerHabitacion,
} from "../controllers/habitacion.controllers.js";
import validacionHabitacion from "../helpers/validacionHabitacion.js";
import verificarJWT from "../helpers/verificaJWT.js";

const habitacionRouter = Router()
habitacionRouter
.route('/habitacion')
.post([ validacionHabitacion],crearHabitacion)
.get(listarHabitacion)
habitacionRouter
.route('/habitacion/:id')
.get(obtenerHabitacion)
.delete(borrarHabitacion)
.put([ validacionHabitacion],editarHabitacion)
export default habitacionRouter