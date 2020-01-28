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

const patientSeedTwo = [
    {
        email: 'pswartz.sju@gmail.com',
        username: 'pswartz68',
        firstName: 'Phil',
        lastName: 'Swartz',
        dateofBirth: '07/15/1994',
        ethnicity: 'white',
        weight: 170,
        height: [6, 1],
        disability: false,
        tobaccoUse: false,
        medications: ['acetom', 'frufein', 'riefnfrne'],
        doseage: [20, 40, 50],
        heartRate: 90,
        bloodSugar: 100,
        systolicBloodPressure: 120,
        diastolicBloodPressure: 80,
        journalEntrySentiment: [65],
        journalEntry: ['Today is sunny. It was a good day.'],
        date: '01/20/2020'
    }
];

for (let i = 0; i < 10; i++) {
    db.PatientInfo.collection.insertMany(patientSeedTwo)
        .then(data => {
            console.log(data.result.n + " records inserted.");
            // process.exit(0);
        })
        .catch(err => {
            console.log(err);
            // process.exit(1);
    });
}