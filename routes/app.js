const express = require('express');
const router = express.Router();

const app_Controller = require('../controller/appController');

router.get('/', app_Controller.app);
router.get('/edit', app_Controller.edit);


module.exports = router;