var express = require('express');
var router = express.Router();

const controller = require('../controllers/projection');

/* GET home page. */
router.get('/', controller.get);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

//Routes for calculation
router.post('/gross', controller.grossProfit)
router.post('/percent-profit', controller.percentLiquidIncome)
router.post('/rol', controller.rol)
router.post('/margin', controller.grossMargin)
router.post('/ebitda', controller.ebitdaCalc)
router.post('/liquidIncome', controller.liquidIncome)

module.exports = router;
