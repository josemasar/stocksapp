const mongoose = require('mongoose');
const {Schema} = mongoose;

const StocksSchema = new Schema({
    ticker: {type: String, required:true},
    name: {type: String, required:true},
    buy: {type : Boolean },
    onList: {type : Boolean }
    },
    { timestamps: true },

)

module.exports = mongoose.model('StocksSchema', StocksSchema);