import Usuario from "../usuario.js";
import bcrypt from "bcrypt";

 const crearAdmin = async () => {
  const URLPassword = import.meta.env.PASSWORD
  try {
    const emailAdmin = "hotel@code.com";
    const passwordAdmin = URLPassword;
    const adminExistente = await Usuario.findOne({ email: emailAdmin });
    if (adminExistente) {
      console.log("El administrador ya existe");
      return;
    }
    const hashearPassword = await bcrypt.hash(passwordAdmin, 10);
    const nuevoAdmin = new Usuario({
      email: emailAdmin,
      password: hashearPassword,
      rol: "admin",
    });
    await nuevoAdmin.save();
    console.log("Usuario administrador creado con éxito");
  } catch (error) {
    console.error("error al crear usuario administrador:", error);
  }
};
export default crearAdmin;
