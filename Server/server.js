const express = require('express');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const db = require('./models')
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');


const app = express();


//PDF Creation
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})



//Middleware:
app.use(express.urlencoded({extended: true}));
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
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${endpoint}`);

//Start up our server:
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});






