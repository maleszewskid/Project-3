const router = require('express').Router();
const controller = require('../../controllers/controller.js');

// Matches with "/api/patient"
// What do we want to do?
// 1. Grab all user info
// 2. Send over user data initially
// 3. Update user data later
// 4. Potentially delete the whole user
router.route('/allData/:username')
    .get(controller.findAllData);

router.route('/createPatient')
    .post(controller.createData);

router.route('/addBloodData')
    .post(controller.addBloodData);

router.route('/addMoodData')
    .post(controller.addMoodData);

router.route('/addMedData')
    .post(controller.addMedData);

router.route('/updateMedData')
    .post(controller.updateMedData);

router.route('/addGenData')
    .post(controller.addGenData);

router.route('/removeData')
    .get(controller.deletePatient)

module.exports = router;