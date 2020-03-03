var express = require('express');
var router = express.Router();

const controller = require('../controllers/index');
const controller2 = require('../controllers/index');

/* GET home page. */
router.get('/', controller.get);

router.post('/login', controller2.post);

module.exports = router;
