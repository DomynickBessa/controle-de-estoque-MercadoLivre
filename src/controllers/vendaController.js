const Venda = require('../models/VendaModel');


exports.criarVenda = async (req, res) => {
    try {
        const { produto_id, quantidade, data } = req.body;

        // Verifica se o produto existe
        if (!produto_id || !quantidade) {
            return res.status(400).json({ error: 'Produto_id e quantidade são obrigatórios' });
        }

        const venda = await Venda.create({
            produto_id,
            quantidade,
            data,
        });
        res.status(201).json(venda);
    } catch (error) {
        console.error('Erro ao criar venda:', error);
        return res.status(500).json({ error: 'Erro ao criar venda', detalhe: error.message });
    }
}

exports.listarVendas = async (__, res) => {
    try {
        const vendas = await Venda.findAll();
        res.json(vendas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar vendas' });
    }
};
