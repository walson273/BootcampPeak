import { validationResult } from "express-validator"

export const Errores = (req, res, next) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }
    next();
}
