const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const db = require('../../models');

// This function is called on login: saves the id to the session req.session.passport.user = {id:'...'}
passport.serializeUser((user, done) => {
    console.log("serialize user called user: ")
    console.log(user);
    done(null, {_id: user._id})
});

// The user object attaches to the request as a req.user
passport.deserializeUser((id, done) => {
    console.log('Deserialize User called')
    db.userCreds.findOne(
        {_id: id},
        'username',
        (err, user) => {
            console.log('Deserialize user: ')
            console.log(user)
            done(null, user)
            if (err) {
                console.log('Deserialize user ' + err)
            }
        }
    )
});

// Use our local strategy:
passport.use(LocalStrategy)

module.exports = passport;