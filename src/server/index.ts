import express from "express";
import { Request, Response } from "express";
const app = express();

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Hello World!")
})

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
})