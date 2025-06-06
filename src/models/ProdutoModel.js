const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProdutoModel = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sku: { // Stock Keeping Unit, um identificador único para o produto
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2), // 10 dígitos no total, 2 após o ponto decimal
        allowNull: false,
    },
    quantidade_em_estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    hooks: {
        beforeValidate: (produto) => {
            if (!produto.sku && produto.nome) {
                const gerarSKU = (nome) => {
                    return nome
                        .toUpperCase()
                        .replace(/\s+/g, '-') // Substitui espaços por hífens
                        .replace(/[^\w-]/g, '') // Remove caracteres especiais, mantendo apenas letras, números e hífens
                        .substring(0, 20); // Limita pra evitar SKUs muito longos
                };
                produto.sku = gerarSKU(produto.nome);
            }
        }
    }
});

module.exports = ProdutoModel;
