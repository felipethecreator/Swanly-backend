import { Request, Response } from "express";
import { createUser } from "../service/userService";

async function handleCreateUser(req: Request, res: Response): Promise<void> {
    try {
        const userData = req.body;
        await createUser(userData);
        res.status(200).json({
            "success": true,
            "message": "Usuário criado com sucesso.",
            "data": {
                "username": userData.username,
                "email": userData.email
            }
        });
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erro ao criar usuário",
            "error": error
        });
    }
}

export default { handleCreateUser };