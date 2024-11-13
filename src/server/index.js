const express = require('express');
app = express()

app.get('/', (req, res) => {
    res.send("Olá mundo!");
})

app.listen(3000, () => {
    console.log("Servidor aberto na porta 3000")
})
