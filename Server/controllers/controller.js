const db = require('../models');

module.exports = {
    // *** USER CREDENTIALS ****
    // --------------------------------------------------------- //
    //Add a new user:
    createUser: function (req, res) {
        db.UserCred
            .create(req.body)
            .then(res => res.status(200))
            .catch(err => res.status(422).json(err))
    },
    //Find an existing user:
    findUser: function (req, res) {
        db.UserCred
            .findOne(req.query)
            .then(res => res.json(res))
            .catch(err => res.status(422).json(err));
    },
    //Delete user *NOTE: not sure if this route is necessary yet:
    deleteUserCreds: function (req, res) {
        db.UserCred
            .findById({ _id: req.params.id })
            .then(res => res.remove())
            .then(res => res.json(res))
            .catch(err => res.status(422).json(err));
    },
    // --------------------------------------------------------- //
    // *** PATIENT INFO ***
    // --------------------------------------------------------- //
    // Create patientInfo db
    createData: function (req, res) {
        db.PatientInfo
            .create(req.body)
            .then(res => res.status(200))
            .catch(err => res.status(422).json(err))
    },
    // find all patientInfo where _id = userId
    findAllData: function (req, res) {
        db.PatientInfo
            .findById({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // update individual patientInfo fields
    updateField: function (req, res) {
        let newFields = {
            email: req.params.email,
            firstName: req.params.fName,
            lastName: req.params.lName,
            dateOfBirth: req.params.dob,
            ethnicity: req.params.ethnicity,
            weight: req.params.weight,
            height: req.params.height,
            address: req.params.address,
            phoneNumber: req.params.phone,
            disability: req.params.disability,
            medications: req.params.medications,
            doseage: req.params.doseage,
            mrn: req.params.mrn,
            heartRate: req.params.hRate,
            bloodSugar: req.params.bSugar,
            systolicBloodPressure: req.params.sisBloodPressure,
            diastolicBloodPressure: req.params.diaBloodPressure,
            moodSentiment: req.params.mood,
            date: req.params.date, 
            username: req.params.username
        }
        db.PatientInfo
            .findByIdAndUpdate({_id: req.params.id}, {newFields})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // delete individual patientInfo fields
    deleteField: function (req, res) {
        let newFields = {
            email: req.params.email,
            firstName: req.params.fName,
            lastName: req.params.lName,
            dateOfBirth: req.params.dob,
            ethnicity: req.params.ethnicity,
            weight: req.params.weight,
            height: req.params.height,
            address: req.params.address,
            phoneNumber: req.params.phone,
            disability: req.params.disability,
            medications: req.params.medications,
            doseage: req.params.doseage,
            mrn: req.params.mrn,
            heartRate: req.params.hRate,
            bloodSugar: req.params.bSugar,
            systolicBloodPressure: req.params.sisBloodPressure,
            diastolicBloodPressure: req.params.diaBloodPressure,
            moodSentiment: req.params.mood,
            date: req.params.date, 
            username: req.params.username
        }
        db.PatientInfo
            .findByIdAndRemove({_id: req.params.id}, {newFields})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // WARNING: delete the whole damn patient
    deletePatient: function (req, res) {
        db.PatientInfo
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    // --------------------------------------------------------- //
}
