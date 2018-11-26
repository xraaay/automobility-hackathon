const router = require('express').Router();
const visaRoutes = require('./visa.routes');

router.use("/visa", visaRoutes);

module.exports = router;