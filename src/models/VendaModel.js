const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ProdutoModel = require('./ProdutoModel');

const VendaModel = sequelize.define('Venda', {
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
ProdutoModel.hasMany(VendaModel, { foreignKey: 'produto_id' });
VendaModel.belongsTo(ProdutoModel, { foreignKey: 'produto_id' });

module.exports = VendaModel;
