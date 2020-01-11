const db = require('../models');

module.exports = {
    // *** USER CREDENTIALS ****
    // --------------------------------------------------------- //
    //Add a new user:
    createUser: function (req, res) {
        db.UserCred
            .create({username: req.body.username, password: req.body.password})
            .then(data => res.status(200))
            .catch(err => res.status(422).json(err))
    },
    //Find an existing user:
    findUser: function (req, res) {
        db.UserCred
            .find({username: req.body.username, password: req.body.password})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    //Delete user *NOTE: not sure if this route is necessary yet:
    deleteUserCreds: function (req, res) {
        db.UserCred
            .findOne({username: req.body.username})
            .then(data => res.remove(data))
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    // --------------------------------------------------------- //
    // *** PATIENT INFO ***
    // --------------------------------------------------------- //
    // Create patientInfo db
    createData: function (req, res) {
        db.PatientInfo
            .create(req.body)
            .then(data => res.status(200))
            .catch(err => res.status(422).json(err))
    },
    // find all patientInfo where _id = userId
    findAllData: function (req, res) {
        db.PatientInfo
            //Change
            .findOne({tobaccoUse: false})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // update individual patientInfo fields
    updateField: function (req, res) {
        let newFields = {
            email: req.body.email,
            firstName: req.body.fName,
            lastName: req.body.lName,
            dateOfBirth: req.body.dob,
            ethnicity: req.body.ethnicity,
            weight: req.body.weight,
            height: req.body.height,
            address: req.body.address,
            phoneNumber: req.body.phone,
            disability: req.body.disability,
            medications: req.body.medications,
            doseage: req.body.doseage,
            mrn: req.body.mrn,
            heartRate: req.body.hRate,
            bloodSugar: req.body.bSugar,
            systolicBloodPressure: req.body.sisBloodPressure,
            diastolicBloodPressure: req.body.diaBloodPressure,
            moodSentiment: req.body.mood,
            date: req.body.date, 
            username: req.body.username
        }
        db.PatientInfo
            .findByIdAndUpdate({_id: req.params.id}, {newFields})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // delete individual patientInfo fields
    // I think we can get around using this route by carefully allowing users to edit data in the 
    // front end.
    deleteField: function (req, res) {
        let newFields = {
            email: req.body.email,
            firstName: req.body.fName,
            lastName: req.body.lName,
            dateOfBirth: req.body.dob,
            ethnicity: req.body.ethnicity,
            weight: req.body.weight,
            height: req.body.height,
            address: req.body.address,
            phoneNumber: req.body.phone,
            disability: req.body.disability,
            medications: req.body.medications,
            doseage: req.body.doseage,
            mrn: req.body.mrn,
            heartRate: req.body.hRate,
            bloodSugar: req.body.bSugar,
            systolicBloodPressure: req.body.sisBloodPressure,
            diastolicBloodPressure: req.body.diaBloodPressure,
            moodSentiment: req.body.mood,
            date: req.body.date, 
            username: req.body.username
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
