import { Router } from "express";
import {
  crearUsuario,
  editarUsuario,
  borrarUsuario,
  obtenerUsuario,
  listarUsuarios,
  login,
  registrarUsuario,
} from "../controllers/usuario.controllers.js";

const usuarioRouter = Router();
usuarioRouter.route("/usuarios").post(crearUsuario).get(listarUsuarios);

usuarioRouter
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .delete(borrarUsuario)
  .put(editarUsuario);

export default usuarioRouter;

usuarioRouter.route("/usuarios/login").post(login);

usuarioRouter.route("/usuarios/registro").post(registrarUsuario)
