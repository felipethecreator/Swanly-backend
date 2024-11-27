import mongoose from "mongoose";
import { DB_URI } from "./secrets";

export async function connectDb() {
    try {
        await mongoose.connect("mongodb+srv://feliperodriguesqueiroz122:7ao6YYDhLCWZOAOa@swanly.iusr6.mongodb.net/?retryWrites=true&w=majority&appName=Swanly");
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
    }
}