const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('../config/db.js');
app = express();

dotenv.config()

sequelize.sync()
.then(() => {
    console.log("conectei essa merda")
}).catch(error => {
    console.log(`Deu b.o, ${error}`)
});

app.get('/', (req, res) => {
    res.send("Olá mundo!");
})

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT}`)
})
