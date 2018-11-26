const router = require('express').Router();
const visaController = require('../controllers/visa.controller');

router.post('/', visaController.create);

module.exports = router;