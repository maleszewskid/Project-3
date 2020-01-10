const router = require('express').Router();
const controller = require('../../controllers/controller.js');

// Matches with "/api/patient"
router.route("/")
    .populate('username')
    // .get(bookController.findAll)
    // .post(bookController.create);

module.exports = router;