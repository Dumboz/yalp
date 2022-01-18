const express = require('express');
const autoCompleteRoutes = require('./autocomplete');
const businessesRoutes = require('./businesses');

const router = express.Router();

router.use('/autocomplete', autoCompleteRoutes);
router.use('/businesses', businessesRoutes);

module.exports = router;
