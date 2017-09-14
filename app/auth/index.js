'use strict';

const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const helper = require('../helpers');

module.exports = () => {
    let authProcessor = (accessToken, refreshToken, profile, done) => {
        helper.findOne(profile.id)
            .then(result => {
                if (result) {
                    console.log(result)
                    done(null, result)
                } else {
                    //Create new user and return
                    helper.createNewUser(profile)
                        .then(newChatUser => done(null, newChatUser))
                        .catch(error => console.log('Error when create new user'));
                }
            })
    }

    passport.use(new FacebookStrategy(config.fb, authProcessor));
}