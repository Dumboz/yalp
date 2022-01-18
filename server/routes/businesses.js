const express = require('express');
const router = express.Router();
const {
  sendSearchResult,
  sendPathResult,
} = require('../controllers/businesses');

router.get('/search', sendSearchResult);

router.get('/:id/reviews', sendPathResult);

router.get('/:id', sendPathResult);

module.exports = router;
