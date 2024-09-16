const express = require('express');
const User = require('../database/user_test');
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

    app.post('/register', (req, res) => {
        const { nome, idade, genero } = req.body; // captura os dados JSON enviados pelo postman

        if (!nome || !idade || !genero) {
            return res.status(400).json({ message: 'Dados incompletos.'})
        }

        const usuario = new User(nome, idade, genero);

        res.status(200).json({
            message: 'Usuario registrado com sucesso',
            usuario
        })
    })

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