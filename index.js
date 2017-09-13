'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1> Test Heroku Deploy </h1>');
})

app.listen(port);