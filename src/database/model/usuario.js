import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 320,
    validate: {
      validator: (value) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        );
      },
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
    trim: true,
    validate: (value) => {
      return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/.test(
        value
      );
    },
  },
  rol: {
    type: String,
    enum: ["admin", "usuario"],
    default: "usuario",
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
