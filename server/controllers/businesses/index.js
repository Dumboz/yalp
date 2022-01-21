const { fetchURL } = require('../../utils/axios/get');
const { makeQuery } = require('../../utils');

const { URL, BUSINESSES, SEARCH } = process.env;

const sendSearchResult = async (req, res) => {
  const { query } = req;

  console.log(query);

  const QUERY = makeQuery(query);
  const restaurantList = await fetchURL(
    URL + BUSINESSES + SEARCH + (QUERY && '?' + QUERY)
  );

  res.send(restaurantList);
};

const sendPathResult = async (req, res) => {
  const { path } = req;

  res.send(await fetchURL(URL + BUSINESSES + path));
};

module.exports = { sendSearchResult, sendPathResult };
