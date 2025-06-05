const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    quantidade_em_estoque: DataTypes.INTEGER,
    sku: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
});

module.exports = Produto;