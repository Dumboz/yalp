const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const { makeQuery } = require('../utils');

const { AUTOCOMPLETE, URL, API_KEY } = process.env;

router.get('/:id?', async (req, res) => {
  const { query } = req;
  const QUERY = makeQuery(query);
  const { data } = await axios(URL + AUTOCOMPLETE + (QUERY && '?' + QUERY), {
    headers: { Authorization: API_KEY },
  });

  res.send(data);
});

module.exports = router;
