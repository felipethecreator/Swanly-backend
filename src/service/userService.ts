import userModel from "../model/user"

interface User {
    username:  string,
    email:     string,
    password:  string
}

export async function createUser(user: User) {
    try {
        await userModel.create(user)
        console.log(`Usuário criado com sucesso!`)
    } catch (error) {
        console.log(`Ocorreu um erro ao cadastrar o usuário: ${error}`)
    }
}