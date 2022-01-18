const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const { makeQuery } = require('../utils');

const { BUSINESSES, URL, API_KEY } = process.env;

router.get('/search', async (req, res) => {
  const { query } = req;
  const QUERY = makeQuery(query);

  const { data } = await axios(URL + BUSINESSES + '/search?' + QUERY, {
    headers: { Authorization: API_KEY },
  });

  res.send(data);
});

router.get('/:id/reviews', async (req, res) => {
  console.log(':id/reviews');
});

router.get('/:id', async (req, res) => {
  console.log(':id');
});

module.exports = router;
