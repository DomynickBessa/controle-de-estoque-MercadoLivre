const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController');

router.get('/', vendaController.listarVendas);
router.post('/', vendaController.criarVenda);

module.exports = router;
