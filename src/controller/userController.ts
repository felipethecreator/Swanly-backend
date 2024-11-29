import { Request, Response } from "express";
import { createUser } from "../service/userService";
import { validationResult } from "express-validator";

async function handleCreateUser(req: Request, res: Response): Promise<void> {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                "success": false,
                "message": "Erro de validação",
                "errors": errors.array(),
            });
            return
        }

        const userData = req.body;
        await createUser(userData);
        res.status(201).json({
            "success": true,
            "message": "Usuário criado com sucesso.",
            "data": {
                username: userData.username,
                email: userData.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "Erro interno no servidor",
            "errors": error,
        });
    }
}

export default { handleCreateUser };