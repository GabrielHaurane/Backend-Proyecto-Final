const verificarAdmin = (req, res, next) => {
  if (req.user && req.user.rol === "admin") {
    next();
  } else {
    res.status(403).json({
      mensaje: "No tienes permisos para realizar esta acción",
    });
  }
};

export default verificarAdmin;