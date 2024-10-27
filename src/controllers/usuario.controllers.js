import Usuario from "../database/model/usuario.js";
import bcrypt from "bcrypt";
import generarJwt from "../helpers/generaJWT.js";

export const crearUsuario = async (req, res) => {
  try {
    const { email, password, rol = "usuario" } = req.body;
    const saltos = bcrypt.genSaltSync(10);
    const hashearPassword = bcrypt.hashSync(password, saltos);
    const usuarioNuevo = new Usuario({ email, password: hashearPassword, rol });
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario fue creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear el Usuario.",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({}, "email rol");
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, no se encontraron usuarios",
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id, "email rol");
    if (!usuarioBuscado) {
      return res.status(404).json({
        mensaje: "El usuario no fue encontrado",
      });
    }
    res.status(200).json(usuarioBuscado);
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo obtener el usuario",
    });
  }
};

export const borrarUsuario = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res.status(404).json({
        mensaje: "El usuario no fue encontrado",
      });
    }
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El usuario fue eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo borrar el usuario",
    });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const userBuscado = await Usuario.findById(req.params.id);
    if (!userBuscado) {
      return res.satus(404).json({
        mensaje: "Ocurrio un error al intentar editar el usuario",
      });
    }
    const {rol} = req.body;
    if (rol) {
      
      await Usuario.findByIdAndUpdate(req.params.id,{rol}, {new: true});
      res.status(200).json({
        mensaje: "El rol del usuario fue cambiado correctamente",
      });
    }else{
      res.status(400).json({
        mensaje: "Debes asignar un nuevo rol al usuario"
      })
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error al intentar editar el usuario",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioExistente = await Usuario.findOne({ email });
    console.log(usuarioExistente)
    if (!usuarioExistente) {
      return res.status(404).json({
        mensaje: "Email o contraseña incorrectos",
      });
    }
    const passwordCorrecto = bcrypt.compareSync(
      password,
      usuarioExistente.password
    );
    if (!passwordCorrecto) {
      return res.status(400).json({
        mensaje: "Email o contraseña incorrectos",
      });
    }
    const token =  generarJwt(usuarioExistente._id, email, usuarioExistente.rol);
    res.status(200).json({
      mensaje: "Email y contraseña correctos",
      Bienvenido: usuarioExistente.email,
      email,
      rol: usuarioExistente.rol,
      token,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, el usuario no se pudo loguear",
    });
  }
};

export const registrarUsuario = async (req, res) => {
  try {
    const { email, password, confirmarPassword, rol = "usuario" } = req.body;
    if (password !== confirmarPassword) {
      return res.status(400).json({
        mensaje: "Las contraseñas no coinciden",
      });
    }
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({
        mensaje: "El email que ingresaste ya esta registrado",
      });
    }
    const hashearPassword = await bcrypt.hash(password, 10);
    const usuarioNuevo = new Usuario({
      ...req.body,
      password: hashearPassword,
      rol,
    });
    await usuarioNuevo.save();
    res.status(200).json({
      mensaje: "Usuario registrado con éxito",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Ocurrio un error, el usuario no se pudo registrar",
    });
  }
};
