const ProdutoModel = require('../models/ProdutoModel');

module.exports = {
    async criar(req, res) {
        try {
            const { nome, preco, quantidade_em_estoque, sku } = req.body;
            const produto = await ProdutoModel.create({
                nome,
                preco,
                quantidade_em_estoque,
                sku
            });
            res.status(201).json(produto)
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            return res.status(500).json({ error: 'Erro ao criar produto', detalhe: error.message });
        }
    },

    async listar(__, res) {
        try {
            const produtos = await ProdutoModel.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar produtos' });
        }
    }
};
