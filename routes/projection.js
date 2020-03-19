var express = require('express');
var router = express.Router();

const controller = require('../controllers/projection');

/* GET home page. */
router.get('/', controller.get);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

//Routes for calculation
router.get('/gross', controller.grossProfit)
router.get('/percent-profit', controller.percentLiquidIncome)
router.get('/rol', controller.rol)
router.get('/margin', controller.grossMargin)
router.get('/ebitda', controller.ebitdaCalc)
router.get('/liquidIncome', controller.liquidIncome)

module.exports = router;
