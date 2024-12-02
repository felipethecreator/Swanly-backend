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

async function getUser(userId: string): Promise<User | null> {
    try {
        const user = await userModel.findById(userId);
        console.log(`Usuário ${user?.username} encontrado com sucesso!`)
        return user;
    } catch (error) {
        console.error(`Erro ao buscar usuário no banco de dados: ${error}`);
        throw error;
    }
}

// TODO: MELHORAR ISSO, E MUITO, transferir para o controller e manter bd aqui
async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const userId = req.params.id;
        const user = await userModel.findByIdAndDelete(userId)
        console.log(`Usuário ${user?.username} removido com sucesso.`)
    } catch (error) {
        console.log(`Ocorreu um erro ao remover o usuário: ${error}`);
    }
}

export { createUser, getUser, deleteUser }