const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('../config/db.js');
const userRoutes = require('../controller/userController.js')
const postRoutes = require('../controller/postController.js')

app = express();
app.use(express.json());

dotenv.config()

sequelize.sync()
.then(() => {
    console.log("conectei essa merda")
}).catch(error => {
    console.log(`Deu b.o, ${error}`)
});

const PORT = process.env.SERVER_PORT;

[...userRoutes,...postRoutes].forEach(
    (route) => {
        app[route.method](route.path,route.callback);
    }
)

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT}`)
})
