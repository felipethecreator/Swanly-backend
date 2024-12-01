import { Request, Response, NextFunction } from "express";
import errorHandler from "../utils/httpResponses";

function validateUsername(req: Request, res: Response, next:NextFunction) {
    const userData = req.body;

    const rules = [
        {
            condition: () => !userData.username || !userData.email || !userData.password,
            messageKey: "emptyField",
        },
        {
            condition: () => userData.username.length < 6,
            messageKey: "miniumLetters"
        },        
        {
            condition: () => userData.username.length > 20,
            messageKey: "maximumLetters"
        },        
        {
            condition: () => userData.username.includes(" "),
            messageKey: "fieldWithSpace"
        }
    ];

    for (const rule of rules) { 
        if (rule.condition()) {
            const errorResponse = errorHandler.get(rule.messageKey);
            if (errorResponse) {
                res.status(400).json(errorResponse);
            } else {
                res.status(500).json({
                    success: false,
                    error: "Internal Server Error",
                    message: "Erro de validação não encontrado.",
                });
            }
            return;
        }
    }
    next();
}

/*
function validateUsername(req: Request, res: Response, next:NextFunction) {
    const userData = req.body;
    if (!userData.username || !userData.email || !userData.password) { // deixei a validação dos 3 campos por enquanto
        res.status(400).json(errorHandler.get("emptyField"))
        return
    }
    if (userData.username.length < 6) {
        res.status(400).json(errorHandler.get("miniumLetters"))
        return
    } if (userData.username.length > 20) {
        res.status(400).json(errorHandler.get("maximumLetters"))
        return
    } if (userData.username.includes(" ")) {
        res.status(400).json(errorHandler.get("fieldWithSpace"))
        return
    }
    next();   
}
*/

export { validateUsername };