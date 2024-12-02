import { Request, Response } from "express";
import { createUser, getUser } from "../service/userService";
import { validationResult } from "express-validator";

async function handleCreateUser(req: Request, res: Response): Promise<void> {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                "success": false,
                "error": "Erro de validação",
                "message": errors.array(),
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
            "error": "Erro interno no servidor",
            "message": error,
        });
    }
}

async function handleGetUser(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.params.id;
        const user = await getUser(userId);
        if (!user) {
            res.status(404).json({ message: "Usuário não encontrado." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            "success": false,
            "error": "Internal error",
            "message": `Ocorreu um erro ao buscar usuário: ${error}`
        })
    }
}

export { handleCreateUser, handleGetUser };