require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_URL, { // URL de conexão com o banco de dados
        dialect:'postgres',
        logging: false,
    }
)

module.exports = sequelize;