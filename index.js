require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const routes = require('./src/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

//MODELS
const Produto = require('./src/models/Produto');
const Venda = require('./src/models/Venda');
// Sincronização do banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado e sincronizado com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar e sincronizar o banco de dados:', error);
    });