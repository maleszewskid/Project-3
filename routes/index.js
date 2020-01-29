const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

//Tell the Express router to use the api routes:
router.use('/api', apiRoutes);

//If no api routes are hit, send the React app:
//If no api routes are hit, we should render the login page.
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;