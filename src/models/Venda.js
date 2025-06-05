const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = require('./Produto');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const Venda = sequelize.define('Venda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    data_venda: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

});

// Relacionamento: uma venda pertence a um produto
Produto.hasMany(Venda, {foreignKey: 'produto_id'});
Venda.belongsTo(Produto, {foreignKey: 'produto_id'});

module.exports = Venda;
