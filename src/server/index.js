const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('../config/db.js');
const User = require('../model/User.js')
app = express();

dotenv.config()

sequelize.sync()
.then(() => {
    console.log("conectei essa merda")
}).catch(error => {
    console.log(`Deu b.o, ${error}`)
});

/* 
ISSO NAO VAI FICAR AQUI, USE DE TESTE

User.create({
    username: "AllanAlvaresCabral",
    email: "alvarodoisamem@hotmail.com",
    password: "879y793189u312h9uji"
}).then(() => {
    console.log("criei o betinho")
}).catch(error => {
    console.log(`Não consegui criar o gala seca, ${error}`)
})
*/

app.get('/', (req, res) => {
    res.send("Olá mundo!");
})

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT}`)
})
