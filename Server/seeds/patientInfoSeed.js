const mongoose = require('mongoose');
const db = require('../models/');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/patientDB"
);

const patientSeed = [
    {
        email: 'jack.jackryan@gmail.com',
        username: 'dongleKong',
        firstName: 'Jack',
        lastName: 'Ryan',
        dateofBirth: '07.13.1989', 
        ethnicity: 'white',
        weight: 155, 
        height: 69, 
        address: '540 West Sedgwick street, Philadelphia PA',
        phoneNumber: '123-456-7890',
        disability: false, 
        tobaccoUse: false, 
        medications: 'none',
        doseage: 0, 
        mrn: 123456789, 
        heartRate: 90, 
        bloodSugar: 100, 
        systolicBloodPressure: 120,
        diastolicBloodPressure: 80, 
        moodSentiment: 0.6, 
        date: '01.08.2020'
    }
];

db.PatientInfo
    .remove({})
    .then(()=> db.PatientInfo.collection.insertMany(patientSeed))
    .then(data => {
        console.log(data.result.n + " records inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });