const router = require('express').Router();
const userCredRoutes = require('./userCred');
const patientInfoRoutes = require('./patientInfo');
const emailRoute = require('./emailSend');

//Authentication routes
router.use('/authenticate', userCredRoutes);

//All patient info:
router.use('/patient', patientInfoRoutes);

router.use('/send', emailRoute);

module.exports = router;