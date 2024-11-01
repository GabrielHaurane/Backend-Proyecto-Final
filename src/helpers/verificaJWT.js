import jwt from "jsonwebtoken";
const verificarJWT = (req, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({
        mensaje: "No hay un token en la peticion",
      });
    }
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.user = payload;
    next();
  } catch (error) {
    console.error("Error al verificar el token");
    switch (error.name) {
      case "JsonWebTokenError":
        return res.status(401).json({
          mensaje: "Token invalido",
        });
      case "TokenExpiredError":
        return res.status(401).json({
          mensaje: "El token expiro",
        });
      case "UnauthorizedError":
        return res.status(401).json({
          mensaje: "no tiene los permisos suficientes para acceder al recurso",
        });
      default:
        return res.status(500).json({
          mensaje: "Error al verificar el token",
        });
    }
  }
};
export default verificarJWT;
