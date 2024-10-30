import { Router } from "express";
import {
  borrarHabitacion,
  crearHabitacion,
  editarHabitacion,
  listarHabitacion,
  listarHabitacionesAdmin,
  obtenerHabitacion,
} from "../controllers/habitacion.controllers.js";
import validacionHabitacion from "../helpers/validacionHabitacion.js";
import verificarJWT from "../helpers/verificaJWT.js";
import verificarAdmin from "../helpers/verificarAdmin.js";
const habitacionRouter = Router()
habitacionRouter
  .route("/habitacion")
  .post([validacionHabitacion,verificarJWT,verificarAdmin], crearHabitacion)
  .get([verificarJWT,verificarAdmin],listarHabitacionesAdmin);
habitacionRouter.route("/catalogo").get([verificarJWT],listarHabitacion);
habitacionRouter
.route('/habitacion/:id')
.get(obtenerHabitacion)
.delete([verificarJWT,verificarAdmin],borrarHabitacion)
.put([ verificarJWT,validacionHabitacion,verificarAdmin],editarHabitacion)
export default habitacionRouter