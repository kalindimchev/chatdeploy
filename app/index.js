'user strict'

//Social authentication
require('./auth')();

module.exports = {
    router: require('./routes')(),
    session: require('./session')
}