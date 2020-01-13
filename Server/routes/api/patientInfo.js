const router = require('express').Router();
const controller = require('../../controllers/controller.js');

// Matches with "/api/patient"
// What do we want to do?
// 1. Grab all user info
// 2. Send over user data initially
// 3. Update user data later
// 4. Potentially delete the whole user
router.route("/")
    .get(controller.findAllData)
    .post(controller.createData);

router.route('/update')
    .post(controller.updateFields)
    .post(controller.updateArrayFields);

router.route('/removeData')
    .get(controller.deletePatient)   
    
    
module.exports = router;