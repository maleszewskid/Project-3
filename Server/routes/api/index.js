const router = require('express').Router();
const userCredRoutes = require('./userCred');
const patientInfoRoutes = require('./patientInfo');

//Authentication routes
router.use('/authenticate', userCredRoutes);

//All patient info:
router.use('/patient', patientInfoRoutes);

module.exports = router;