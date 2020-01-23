const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Patient Info Schema
const PatientInfo = new Schema ({
    email: {
        type: String
    },
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    sex: {
        type: String
    },
    dateofBirth: {
        //Date formats to: 'mm.dd.yyyy'
        type: String
    },
    ethnicity: {
        type: String
    },
    weight: {
        type: Number
    },
    height: [{
        type: Number
    }],
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    disability: {
        type: String
    },
    tobaccoUse: {
        type: String
    },
    genTimeStamp: [{
        type: Date
    }],
    //Needs to be an array
    medications: [{
        type: String
    }],
    //Needs to be an array
    doseage: [{
        type: Number
    }],
    medsTimeStamp: [{
        type: Date
    }],
    mrn: {
        type: Number
    },
    //Needs to be an array
    heartRate: [{
        type: Number
    }],
    //Needs to be an array
    bloodSugar: [{
        type: Number
    }],
    //Needs to be an array
    systolicBloodPressure: [{
        type: Number
    }],
    //Needs to be an array
    diastolicBloodPressure: [{
        type: Number
    }],
    bloodTimeStamp: [{
        type: Date
    }],
    //Needs to be an array
    journalEntrySentiment: [{
        type: Number
    }],
    journalEntry: [{
        type: String
    }],
    moodTimeStamp: [{
        type: Date
    }]
})

const patientInfo = mongoose.model("patientInfo", PatientInfo);

module.exports = patientInfo;

