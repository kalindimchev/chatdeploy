'user strict'

//Social authentication
require('./auth')();

//Create IO Server instance
let ioServer = app => {
    app.locals.chatrooms = [];
  
    const server = require('http').Server(app);
    const io = require('socket.io').listen(server);
    io.use((socket, next) => {
        require('./session')(socket.request, {}, next);
    });
    require('./socket')(io, app);
    
    return server;
    // const server = app.listen(app.get('port'), () => {
    //     console.log(app.get('port'));
    // });
}

module.exports = {
    router: require('./routes')(),
    session: require('./session'),
    ioServer
}