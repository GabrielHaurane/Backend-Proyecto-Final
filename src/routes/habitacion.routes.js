import { Router } from "express";
import {
  borrarHabitacion,
  crearHabitacion,
  editarHabitacion,
  listarHabitacion,
  obtenerHabitacion,
} from "../controllers/habitacion.controllers.js";

const habitacionRouter = Router()
habitacionRouter
.route('/habitacion')
.post(crearHabitacion)
.get(listarHabitacion)
habitacionRouter
.route('/habitacion/:id')
.get(obtenerHabitacion)
.delete(borrarHabitacion)
.put(editarHabitacion)
export default habitacionRouter