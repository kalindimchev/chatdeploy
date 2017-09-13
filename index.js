'use strict';

var express = require('express');
var app = express();
var chatcat = require('./app');
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', chatcat.router);

app.listen(port);