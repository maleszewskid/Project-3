const mongoose = require('mongoose');
const db = require('../models/');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/patientDB"
);

const userCredSeed = [
    {
        username: 'dongleKong',
        password: '123SesameStreet'
    }
];

db.UserCred
    .remove({})
    .then(()=> db.UserCred.collection.insertMany(userCredSeed))
    .then(data => {
        console.log(data.result.n + " records inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });