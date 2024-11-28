import { Request, Response } from "express";
import { createUser } from "../service/userService";

async function handleCreateUser(req: Request, res: Response): Promise<void> {
    try {
        const userData = req.body;
        await createUser(userData);
        res.status(200).send(`Usuário ${userData.username} criado com sucesso!`);
    } catch (error) {
        res.status(400).send(`Erro ao criar usuário: ${error}`);
    }
}

export default { handleCreateUser };