const express = require('express');
const router = express.Router();

// Importando os módulos de rotas
const produtoRoutes = require('./produtoRoutes');
const vendaRoutes = require('./vendasRoutes');


// Rotas
router.use('/produtos', produtoRoutes);
router.use('/vendas', vendaRoutes);

module.exports = router;