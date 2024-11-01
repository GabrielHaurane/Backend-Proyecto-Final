import jwt from "jsonwebtoken";

const generarJWT =  (uid, email, rol) => {
    try {
        const payload = {uid, email, rol}
        const token =  jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: "1h"
        })
        return token
    } catch (error) {
        console.error('Error al generar el token '+ error.message)
        throw new Error('no se pudo generar el token')
    }
}
export default generarJWT;