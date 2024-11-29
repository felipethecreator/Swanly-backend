import { Request, Response, NextFunction } from "express";

/*
const validateUser = [
    body("username").notEmpty().withMessage("O campo username é obrigatório."),
    body("email").notEmpty().isEmail().withMessage("O campo 'email' deve ser um campo válido."),
    body("password").isLength({ min: 8 }).withMessage("A senha deve ter no mínimo 8 caracteres.")
]
*/

//todo: username não deve ter espaço ou caracteres especiais e melhorar essa bomba

function validateUsername(req: Request, res: Response, next:NextFunction) {
    const userData = req.body;
    if (!userData.username) {
        res.status(400).json({
            "success": false,
            "error": "Bad Request",
            "message": "Preencha o campo 'username'."
        })
        return
    }
    if (userData.username.length < 6) {
        res.status(400).json({
            "success": false,
            "error": "Bad Request",
            "message": "Seu username deve ter no mínimo 6 letras!"
        })
        return
    } if (userData.username.length > 20) {
        res.status(400).json({
            "success": false,
            "error": "Bad Request",
            "message": "Seu username deve ter no máximo 30 letras!"
        })
        return
    } if (userData.username.includes(" ")) {
        res.status(400).json({
            "success": false,
            "error": "Bad Request",
            "message": "Seu username não pode conter espaços!"
        })
        return
    }
    next();   
}

export { validateUsername };