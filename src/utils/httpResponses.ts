type ErrorResponse = {
    success: boolean;
    error: string;
    message: string;
};

const errorHandler = new Map<string, ErrorResponse>([
        ["emptyField", {            
            success: false,
            error: "Bad Request",
            message: "Preencha todos os campos!"
        }],
        [
         "miniumLetters", {
            success: false,
            error: "Bad Request",
            message: "Seu username deve ter no mínimo 6 letras!"
         }],
        [
         "maximumLetters", {
            success: false,
            error: "Bad Request",
            message: "Seu username deve ter no máximo 30 letras!"
         }
        ],
        [
         "fieldWithSpace", {            
            success: false,
            error: "Bad Request",
            message: "Seu username não pode conter espaços!"
         }
        ]
    ])

export default errorHandler 