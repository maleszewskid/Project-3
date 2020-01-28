const express = require('express');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const db = require('./models')
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();


//Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
// Calls the deserializeUser
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Use routes
app.use(routes);


const endpoint = 'patientDB';
//Start up the mongoose server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:password1@ds023500.mlab.com:23500/heroku_xdcjjrc5');


//Start up our server:
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
