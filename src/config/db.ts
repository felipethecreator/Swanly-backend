import mongoose from "mongoose";
import { DB_URI } from "./secrets";

export async function connectDb() {
    try {
        await mongoose.connect(`${DB_URI}`);
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
    }
}