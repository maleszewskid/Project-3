const router = require('express').Router();
const controller = require('../../controllers/controller.js');
const passport = require('../../config/passport');


// Matches with "/api/authenticate"
router.route('/Login')
     .post(controller.login, passport.authenticate('local'), (req, res) => {
        const { username, password} = req.body;
        let userInfo = {
            username
        }
        res.send(userInfo)
    }
)
     
router.route('/Signup')
    .post(controller.signUp);

router.route('/Logout')
    .post(controller.logoutUser);

router.route('/DeleteUser/:username')
    .delete(controller.deleteUserCreds);

// Jack confirm if this is handled correctly, 
// need to also add api func in utils to update mongo password
router.route('/UpdatePassword/:username')
    .post(controller.updatePatientPassword);

module.exports = router;