require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const routes = require('./src/routes'); // Importando as rotas do index.js dentro da pasta routes


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes); // agrupando todas as rotas sob o prefixo /api


// Conexão com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado e sincronizado com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar e sincronizar o banco de dados:', error);
    });

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});