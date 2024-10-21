import { check } from "express-validator";
import resuldadoValidacion from "./resultadoValidacion.js";
const validacionHabitacion = [
  check("tipoHabitacion")
    .notEmpty()
    .withMessage("El tipo de habitacion es un dato obligatorio")
    .isIn([
      "Habitacion Individual",
      "Habitacion Doble",
      "Habitacion Familiar",
      "Suite Junior",
      "Suite Precidencial",
    ])
    .withMessage(
      "El tipo de habitacion debe ser una de las siguientes opciones: Habitacion individual, Habitacion Doble, Habitacion Familiar, Suite Junior, Suite Precidencial"
    ),
  check("capacidad")
    .notEmpty()
    .withMessage(
      "La cantidad de personas en la habitacion es un dato obligatorio"
    )
    .isNumeric()
    .withMessage("la cantidad debe ser un numero")
    .custom((cantidadPerso) => {
      if (cantidadPerso >= 1 && cantidadPerso <= 6) {
        return true;
      } else {
        throw new Error("La cantidad de personas debe ser entre 1 a 6");
      }
    }),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((valorPrecio) => {
      if (valorPrecio >= 100 && valorPrecio <= 500) {
        return true;
      } else {
        throw new Error("El precio debe ser entre 100 a 500 dolares incluidos");
      }
    }),
  check("servicios")
    .notEmpty()
    .withMessage("Los servicios que incluye es un dato obligatorio")
    .isLength({
      min: 50,
      max: 500,
    })
    .withMessage("La cantidad de servicios debe ser entre 50 y 500 caracteres"),
  check("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({
      min: 20,
      max: 300,
    })
    .withMessage("La Descripcion breve debe ser entre 20 y 300 caracteres"),
  check("descripcion_amplia")
    .notEmpty()
    .withMessage("Los servicios que incluye es un dato obligatorio")
    .isLength({
      min: 30,
      max: 1000,
    })
    .withMessage("La Descripcion amplia debe ser entre 30 y 1000 caracteres"),
  check("tamanio")
    .notEmpty()
    .withMessage("El tamaño es un dato obligatorio")
    .isNumeric()
    .withMessage("El tamaño debe ser un numero")
    .custom((valorTamanio) => {
      if (valorTamanio >= 10 && valorTamanio <= 100) {
        return true;
      } else {
        throw new Error("El tamaño debe ser entre 10 a 100 m2");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe ser una URL valida y terminar en alguna de las siguientes extensiones: jpg, jpeg, gif o png"
    ),
  check("disponibilidad")
    .notEmpty()
    .withMessage("La disponibilidad es un dato obligatorio")
    .isIn(["si","no"])
    .withMessage("debe seleccionar una de las dos opciones para verificar su disponiblidad")
    .isBoolean()
    .withMessage("La disponibilidad debe ser un valor booleano."),
  check("fechaEntrada")
  .notEmpty()
  .withMessage("La fecha es un dato obligatorio")
    .isISO8601()
    .withMessage("La fecha de entrada debe ser una fecha válida.")
    .custom((value) => {
      if (new Date(value) <= Date.now()) {
        throw new Error("La fecha de entrada debe ser una fecha futura.");
      }
      return true;
    }),
  check("fechaSalida")
  .notEmpty()
  .withMessage("La fecha es un dato obligatorio")
    .isISO8601()
    .withMessage("La fecha de salida debe ser una fecha válida.")
    .custom((value) => {
      if (new Date(value) <= Date.now()) {
        throw new Error("La fecha de salida debe ser una fecha futura.");
      }
      return true;
    }),
];
