const httpResponses = {
    success: {
        true: true,
        false: false
    },
    error: {
        badRequest: "Bad Request",
    },
    message: {
        emptyField: "Preencha o campo 'username'.",
        miniumLetters: "Seu username deve ter no mínimo 6 letras!",
        maximumLetters: "Seu username deve ter no máximo 30 letras!",
        fieldWithSpace: "Seu username não pode conter espaços!"
    }
}

function httpHelper() {
    
}