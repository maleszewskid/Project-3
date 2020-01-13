const LocalStrategy = require('passport-local').Strategy;
const db = require('../../models');

const strategy =  new LocalStrategy(
    {
        usernameField: 'username'
    },
    function (username, password, done) {
        db.UserCred.findOne(
            { username: username }, (err, user) => {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, {message: 'Incorrect username'})
                }
                if (user.checkPassword(password)) {
                    return done(null, false, {message: 'Incorrect password'})
                }
                return done(null, user)
            }
        )
        });

module.exports = strategy;