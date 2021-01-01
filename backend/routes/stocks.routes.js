const express = require('express');
const router = express.Router();

const stocks = require('../controllers/stocks.controller');

router.get('/', stocks.getStocks);
router.post('/', stocks.createStock);
router.get('/:id', stocks.getStock);
router.put('/:id', stocks.editStock);
router.delete('/:id', stocks.deleteStock);

module.exports = router;