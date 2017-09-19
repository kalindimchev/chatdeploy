'use strict';

const helper = require('../helpers');

module.exports = (io, app) => {
    let allRooms = app.locals.chatrooms;

    io.of('/roomslist').on('connection', socket => {
        console.log('Socket.io connected to client -> /roomslist');
    });
}
