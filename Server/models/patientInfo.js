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
    sex: {
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
    //Needs to be an array
    medications: [{
        type: String
    }],
    //Needs to be an array
    doseage: [{
        type: Number
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
    //Needs to be an array
    moodSentiment: [{
        type: Number
    }],
    //Needs to be an array
    date: [{
        type: Date,
        default: Date.now
    }],
    username: {
        type: Schema.Types.ObjectId,
        ref: "username"
    }

})

const patientInfo = mongoose.model("patientInfo", PatientInfo);

module.exports = patientInfo;

