const express = require('express');
const router = express.Router();

const app_Controller = require('../controller/appController');

router.get('/', app_Controller.app);


module.exports = router;