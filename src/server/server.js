const express = require('express');
const searchRoutes = require('../routes/routes')
const app = express();
const port = 3000;

searchRoutes(app)

app.listen(port, () => {
    console.log(`O app está rodando na porta ${port}`)
})