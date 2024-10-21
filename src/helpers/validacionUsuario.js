import { check } from "express-validator";
import resuldadoValidacion from "./resultadoValidacion.js";
const validacionUsuario = [
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
    .withMessage("Ej: juanperez@email.com")
    .isLength({
      min: 3,
      max: 320,
    })
    .withMessage("El email debe tener entre 3 y 320 caracteres"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isLength({
      min: 8,
      max: 100,
    })
    .withMessage("La contraseña es inválida")
    .matches(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/
    )
    .withMessage(
      "La contraseña debe contener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanúmerico"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
