import express from "express";
import { Request, Response } from "express";
import { connectDb } from "../config/db";
import router from "../routes/userRoutes";
const app = express();

app.use(express.json());
app.use(router)

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Hello World!")
})


app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
    connectDb()
})