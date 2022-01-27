const express = require('express');
const router = express.Router();
const { sendAutocompleteWords } = require('../controllers/autocomplete');

router.get('/', sendAutocompleteWords);

module.exports = router;
