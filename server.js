'use strict';

const express = require('express');
const app = require('express')();
const chatcat = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(require('./app/session'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./app/routes')());

app.locals.chatrooms = [];

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.use((socket, next) => {
    require('./app/session')(socket.request, {}, next);
});
require('./app/socket')(io, app);
require('./app/auth')();

server.listen(app.get('port'), () => {
    console.log(app.get('port'));
    console.log(process.env.PORT);
    console.log('ChatCAT Running on Port: ' + app.get('port'));
});

