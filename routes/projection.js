var express = require('express');
var router = express.Router();

const controller = require('../controllers/projection');

/* GET home page. */
router.get('/', controller.get);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;
