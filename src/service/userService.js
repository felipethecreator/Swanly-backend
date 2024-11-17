const User = require('../model/User.js')

function createUser(UserEntity) {
    User.create(UserEntity)
    .then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch(error => {
        console.log(`Não foi possível criar o usuário, ${error}`)
    })
}

module.exports = { createUser };