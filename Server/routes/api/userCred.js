const router = require('express').Router();
const controller = require('../../controllers/controller.js');

// Matches with "/api/authenticate"
router.route("/Login")
     .post(controller.findUser);
     
router.route('/Signup')
    .post(controller.createUser);

router.route('/DeleteUser/:username')
    .delete(controller.deleteUserCreds);     

module.exports = router;