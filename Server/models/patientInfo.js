const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Patient Info Schema
const PatientInfo = new Schema ({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    dateofBirth: {
        //Date formats to: 'mm.dd.yyyy'
        type: Date
    },
    ethnicity: {
        type: String
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    disability: {
        type: Boolean
    },
    tobaccoUse: {
        type: Boolean
    },
    medications: {
        type: String
    },
    doseage: {
        type: Number
    },
    mrn: {
        type: Number
    },
    heartRate: {
        type: Number
    },
    bloodSugar: {
        type: Number
    },
    systolicBloodPressure: {
        type: Number
    },
    diastolicBloodPressure: {
        type: Number
    },
    moodSentiment: {
        type: Number
    },
    date: {
        type: Date
    }

})

const patientInfo = mongoose.model("patientInfo", PatientInfo);

module.exports = patientInfo;

