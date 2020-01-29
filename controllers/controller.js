const db = require('../models');
const nodemailer = require('nodemailer');
const creds = require('../config/emailConfig.js');

module.exports = {
    // *** USER CREDENTIALS ****
    // --------------------------------------------------------- //
    //Signup:
    // Built in a little validation to check if the username is taken.
    signUp: function (req, res) {
        console.log(req.body);
        const { username, password } = req.body;
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
    logoutUser: function (req, res) {
        console.log('Logout user')
        if (req.user) {
            req.logout();
            res.send({ message: 'logging out' })
            console.log('logged out');
        } else {
            res.send({ message: 'No user to logout' })
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
    // find all patientInfo where username = username
    findAllData: function (req, res) {
        db.PatientInfo
            .findOne({ username: req.params.username })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    // update array items individual patientInfo fields
    addBloodData: function (req, res) {
        const newFields = req.body.data;
        db.PatientInfo
            .findOneAndUpdate({ username: req.body.data.username.username }, { $push: { heartRate: newFields.heartRate, bloodSugar: newFields.bloodSugar, systolicBloodPressure: newFields.systolicBloodPressure, diastolicBloodPressure: newFields.diastolicBloodPressure, bloodTimeStamp: Date.now() } }, { returnOriginal: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addMoodData: function (req, res) {
        const newFields = req.body.data;
        db.PatientInfo
            .findOneAndUpdate({ username: req.body.data.username.username }, { $push: { 'journalEntry': newFields.journalEntry, 'journalEntrySentiment': newFields.journalEntrySentiment, moodTimeStamp: Date.now() } }, { returnOriginal: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addMedData: function (req, res) {
        const newFields = req.body.data;
        db.PatientInfo
            .findOneAndUpdate({ username: req.body.data.username.username }, { $push: { 'medications': newFields.medications, 'doseage': newFields.doseage, medsTimeStamp: Date.now() } }, { returnOriginal: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateMedData: function (req, res) {
        const newFields = req.body.data;
        db.PatientInfo
            .findOneAndUpdate({ username: req.body.data.username.username }, { $push: { 'medications': newFields.medications, 'doseage': newFields.doseage, medsTimeStamp: Date.now() } }, { returnOriginal: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addGenData: function (req, res) {
        const newFields = req.body.data;
        db.PatientInfo
            .findOneAndUpdate({ username: req.body.data.username.username }, { $push: { 'height': newFields.height, genTimeStamp: Date.now() }, $set: { 'mrn': newFields.mrn, 'sex': newFields.sex, 'weight': newFields.weight, 'ethnicity': newFields.ethnicity, 'disability': newFields.disability, 'tobaccoUse': newFields.tobaccoUse } }, { returnOriginal: false })
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
    },
    // update the users password on reset password submit button page
    updatePatientPassword: function (req, res) {
        db.UserCreds
            .findOneAndUpdate({ username: req.params.username }, { $set: { "password": req.body.password } })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    sendEmail: function (req, res) {
        // pass email template through as req.body
        console.log(req.body);
        // console.log(creds.USER, creds.PASS);

        const emailBody = `
        <h1> Hello ${req.body.firstName} ${req.body.lastName}</h1>
        <h2>Here's your Patient First information!</h2>
        <hr>
        <p>
            <strong>INSTRUCTIONS:</strong>This email was generated from the Patient First web application. It may contain
            sensitive medical information. This information can be forwarded to your primary
            care provider prior to your next visit.
        </p>
        <ul>
            <li> Date of Birth: ${req.body.dateofBirth.slice(0,16)} </li>
            <li> MRN: ${req.body.mrn}</li>
            <li> Ethnicity: ${req.body.ethnicity}</li>
            <li> Sex: ${req.body.sex}</li>
            <li> Height: ${req.body.height[0]}ft ${req.body.height[1]}in</li>
            <li> Weight: ${req.body.weight}lbs</li>
            <li> Disability: ${req.body.disability}</li>
            <li> Tobacco Use: ${req.body.tobaccoUse}</li>
        </ul>
        <br>
            <p>Thank you,</p>
            <p>Patient First Team</p>
        <br>
        <p>
            <strong>CONFIDENTIALITY NOTICE:</strong>
            This email message, including any attachment(s), is intended
            only for the named recipient(s) and contains confidential, 
            proprietary or legally privileged information. Unauthorized 
            individuals or entities are not permitted access to this information. 
            Any dissemination, distribution, disclosure, or copying of this 
            information is unauthorized and strictly prohibited. If you have 
            received this message in error, please advise the sender by reply email, 
            and delete this message and any attachments.
        </p>
        `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: creds.USER, // generated ethereal user
                pass: creds.PASS  // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Patient First" <patient.first.contact@gmail.com>', // sender address
            to: req.body.emailAddress, // list of receivers
            subject: 'Patient Medical Form', // Subject line
            text: '', // plain text body
            html: emailBody // html body
        };

        // // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                transporter.close();
                return console.log(error);
            }
            res.json();
            transporter.close();
        })
    }

    // --------------------------------------------------------- //
}
