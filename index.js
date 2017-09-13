'use strict';

const express = require('express');
const app = express();
const chatcat = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);

app.use('/', chatcat.router);

app.listen(app.get('port'));