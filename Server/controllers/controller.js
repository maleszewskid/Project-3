const db = require('../models');

module.exports = {
    // *** USER CREDENTIALS ****
    // --------------------------------------------------------- //
    //Signup:
    // Built in a little validation to check if the username is taken.
    signUp: function (req, res) {
        console.log(req.body);
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
                    .then(data => res.json(data))
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
        console.log(req.body)
        db.PatientInfo
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // find all patientInfo where username = username
    findAllData: function (req, res) {
        console.log(req.params.username)
        db.PatientInfo
            .findOne({ username: req.params.username })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // update non-array items individual patientInfo fields
    addData: function (req, res) {
        console.log(req.body.data)
        const newFields = req.body.data;
        db.PatientInfo
            .findOneAndUpdate({ username: req.body.data.username }, { newFields })
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
