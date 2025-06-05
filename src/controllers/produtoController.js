const Produto = require('../models/Produto');

module.exports = {
    async criar(req, res) {
        try {
            const { nome, preco, quantidade_em_estoque, sku } = req.body;
            const produto = await Produto.create({
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
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos' });
    }
}
};
