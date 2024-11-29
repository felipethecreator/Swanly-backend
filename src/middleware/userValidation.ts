import { body } from "express-validator";

const validateUser = [
    body("username").notEmpty().withMessage("O campo username é obrigatório."),
    body("email").notEmpty().isEmail().withMessage("O campo 'email' deve ser um campo válido."),
    body("password").isLength({ min: 8 }).withMessage("A senha deve ter no mínimo 8 caracteres.")
]

export { validateUser };