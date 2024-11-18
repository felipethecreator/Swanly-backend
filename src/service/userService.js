const User = require('../model/User.js')

async function createUser(UserEntity) {
    try {
        await User.create(UserEntity)
        console.log("Usuário criado com sucesso!")
    } catch (error) {
        console.log(`Não foi possível criar o usuário, ${error}`)
    }
}

// TODO: I need to make this guy do a response, not a console.log
async function getUser(req, res) {
    try {
        const usuarios = await User.findAll()
        console.log(usuarios)
    } catch (error) {
        console.log(`Deu merda... ${error}`)
    }
}

module.exports = { createUser, getUser };