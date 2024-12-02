import userModel from "../model/user"
import bycrypt, { hash } from 'bcrypt';
import { User } from "../types/User";

export async function createUser(user: User) {
    try {
        const passwordHash = await hash(user.password, 8);
        user.password = passwordHash;
        await userModel.create(user);
        console.log(`Usuário criado com sucesso!`);
    } catch (error) {
        console.log(`Ocorreu um erro ao cadastrar o usuário: ${error}`);
    }
}