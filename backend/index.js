const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app=express();

const {mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}))

//Routes
app.use('/api/stocks', require('./routes/stocks.routes'));


//Starting the server
app.listen(app.get('port'), () => {
        console.log('Server on port', app.get('port'));
});