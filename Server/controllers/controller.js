const db = require('../models');

module.exports = {
    // *** USER CREDENTIALS ****
    // --------------------------------------------------------- //
    //Signup:
    // Built in a little validation to check if the username works.
    signUp: function (req, res) {
        console.log('User signup');
        const { username, password} = req.body;
        db.UserCred.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log(err);
            } else if (user) {
                res.json({
                    error: `The username ${username} has been taken.`
                })
            } else {
                console.log('Creating new user')
                db.UserCred
                    .create({ username: username, password: password })
                    .then(data => res.status(200))
                    .catch(err => res.status(422).json(err))
            }
        })
    },
    //Login:
    login: function (req, res, next) {
        next()
    },
    // Logout: 
    logoutUser: function(req, res) {
        console.log('Logout user')
        if (req.user) {
            req.logout
            res.send({message: 'logging out'})
        } else {
            res.send({message: 'No user to logout'})
        }
    },
    //Delete user *NOTE: not sure if this route is necessary yet:
    deleteUserCreds: function (req, res) {
        db.UserCred
            .findOne({ username: req.body.username })
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
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // find all patientInfo where _id = userId
    findAllData: function (req, res) {
        db.PatientInfo
            //Change
            .findOne({ username: req.body.username })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // update non-array items individual patientInfo fields
    updateFields: function (req, res) {
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
            mrn: req.body.mrn,
            username: req.body.username
        }
        db.PatientInfo
            .findByIdAndUpdate({ _id: req.params.id }, { newFields })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //Update array items:
    updateArrayFields: function (req, res) {
        let arrayFields = {
            medications: req.body.medications,
            doseage: req.body.doseage,
            heartRate: req.body.hRate,
            bloodSugar: req.body.bSugar,
            systolicBloodPressure: req.body.sisBloodPressure,
            diastolicBloodPressure: req.body.diaBloodPressure,
            moodSentiment: req.body.mood,
            date: req.body.date
        }
        db.PatientInfo
            .findByIdAndUpdate({ _id: req.params.id }, { $push: { arrayFields } } , { new: true })
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
