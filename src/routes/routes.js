const express = require('express');
const app = express();

app.use(express.json());

function searchRoutes(app) {
    
    app.get('/', (req, res) => {
        res.send("Hello, world!");
    });
    
    app.get('/ola', (req, res) => {
        console.log("ouvindo no path /ola");
        res.send("Olá!");
    });

    // fazendo teste para o postman
    app.get('/pensologoexisto', (req, res) => {
        return res.json({ 
            status: '200', 
            message: 'pois então pense mais' 
        });
    });
}

module.exports = searchRoutes;

/*
OUTRO JEITO DE TRABALHAR COM JSON

res.status(200).json({
    status: '200',
    message: 'pois então pense mais' 
})
*/