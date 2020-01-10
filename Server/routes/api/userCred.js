const router = require('express').Router();
const controller = require('../../controllers/controller.js');

// Matches with "/api/authenticate"
router.route("/login")
    // .get(bookController.findAll)
    // .post(bookController.create);


module.exports = router;