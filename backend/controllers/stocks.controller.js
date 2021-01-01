const Stock = require('../models/stocks_schema');

const stocksCtrl = {};

stocksCtrl.getStocks = async (req, res, next) => {
    const stocks = await Stock.find();
    res.json(stocks);
};

stocksCtrl.createStock = async (req, res, next) => {
    const stock = new Stock({
        ticker: req.body.ticker,
        name: req.body.name,
        buy: req.body.buy,
        onList: req.body.onList
    });
    await stock.save();
    res.json({status: 'Stock created in DB'});
};

stocksCtrl.getStock = async (req, res, next) => {
    const { id } = req.params;
    const stock = await Stock.findById(id);
    res.json(stock);
};

stocksCtrl.editStock = async (req, res, next) => {
    const { id } = req.params;
    const stock = {
        ticker: req.body.ticker,
        name: req.body.name,
        buy: req.body.buy,
        onList: req.body.onList
    };
    await Stock.findByIdAndUpdate(id, {$set: stock}, {new: true});
    res.json({status: 'Stock Updated in DB'});
};

stocksCtrl.deleteStock = async (req, res, next) => {
    await Stock.findByIdAndRemove(req.params.id);
    res.json({status: 'Stock Deleted in DB'});
};

module.exports = stocksCtrl;