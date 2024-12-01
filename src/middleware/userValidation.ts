import { Request, Response, NextFunction } from "express";
import errorHandler from "../utils/httpResponses";

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

export { validateUsername };