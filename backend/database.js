const mongoose = require('mongoose');

const URI = 'mongodb://localhost/stocksdb';

mongoose.connect(URI, 
    
    {useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true }, 
    
    (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to mongodb");
});

module.exports = mongoose;