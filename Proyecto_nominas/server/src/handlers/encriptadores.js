import bcrypt from "bcryptjs";

export const encriptar = async (contra) => {
    const encriptado = await bcrypt.hash(contra,10)
    return encriptado
}

export const comparar = async (contra, encriptado) => {
    return await bcrypt.compare(contra, encriptado)
}

