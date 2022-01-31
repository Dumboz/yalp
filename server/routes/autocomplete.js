const express = require('express');
const router = express.Router();
const { sendAutocompleteWords } = require('../controllers/autocomplete');

router.get('/:id', sendAutocompleteWords);

module.exports = router;
