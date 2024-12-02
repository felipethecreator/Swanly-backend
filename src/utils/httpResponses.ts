import { ErrorResponse } from "../types/ErrorResponse";

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
            message: "Seu username deve ter no máximo 20 letras!"
         }
        ],
        [
         "fieldWithSpace", {            
            success: false,
            error: "Bad Request",
            message: "Seu username não pode conter espaços!"
         }
        ]
    ]);

export default errorHandler