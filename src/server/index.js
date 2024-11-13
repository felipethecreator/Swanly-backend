const express = require('express');
const dotenv = require('dotenv');
app = express();

dotenv.config()

app.get('/', (req, res) => {
    res.send("Olá mundo!");
})

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log("Servidor aberto na porta 3000")
})
