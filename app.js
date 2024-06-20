const express = require('express');


const api = express();


const indexController = require('./controllers/indexController');


api.get('/', indexController);


//localhost:8000/
api.listen('8000', () => console.log('Servidor Okay'));
