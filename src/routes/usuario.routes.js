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
import validacionUsuario from "../helpers/validacionUsuario.js";
import validacionLogin from "../helpers/validacionLogin.js";
import verificarJWT from "../helpers/verificaJWT.js";
import verificarAdmin from "../helpers/verificarAdmin.js";

const usuarioRouter = Router();
usuarioRouter
  .route("/usuarios")
  .post([validacionUsuario], crearUsuario)
  .get([verificarJWT], listarUsuarios);

usuarioRouter
  .route("/usuarios/:id")
  .get([verificarJWT], obtenerUsuario)
  .delete([verificarJWT, verificarAdmin], borrarUsuario)
  .put([verificarJWT], editarUsuario);

usuarioRouter.route("/usuarios/login").post([validacionLogin], login);

usuarioRouter.route("/usuarios/registro").post([validacionUsuario],registrarUsuario);

export default usuarioRouter;
