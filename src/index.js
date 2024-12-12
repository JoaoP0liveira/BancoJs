require('dotenv').config();

const express = require('express');
const router = require('./routers/router');
const sequelize = require('./config/config');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use('/api', router);

app.get('/healthcheck', (req, res) => {
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive: true
    })
});

sequelize.authenticate()
    .then(async () => {
        console.log("Conexão estabelecida com sucesso");
        await sequelize.sync();
    })

    .then(() => {
        app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
            console.log("##############");
            console.log("Rodando na porta 8080");
            console.log("##############");
        });
    })

    .catch((error) => {
        console.log("Erro ao se conectar com o banco: ", error);
    });