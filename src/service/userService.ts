import userModel from "../model/user"
import bycrypt, { hash } from 'bcrypt';
import { User } from "../types/User";
import { Request, Response } from 'express';

async function createUser(user: User) {
    try {
        const passwordHash = await hash(user.password, 8);
        user.password = passwordHash;
        await userModel.create(user);
        console.log(`Usuário criado com sucesso!`);
    } catch (error) {
        console.log(`Ocorreu um erro ao cadastrar o usuário: ${error}`);
    }
}

// TODO: MELHORAR ISSO, E MUITO
async function getUser(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        console.log(`Usuário encontrado!`);
        res.status(200).json(user)
    } catch (error) {
        console.log(`Ocorreu um erro ao buscar o usuário: ${error}`);
    }
}

export { createUser, getUser }