const { fetchURL } = require('../../utils/axios/get');
const { makeQuery } = require('../../utils');

const { URL, BUSINESSES, SEARCH } = process.env;

const sendSearchResult = async (req, res) => {
  const { query } = req;

  const QUERY = makeQuery(query);

  try {
    const restaurantList = await fetchURL(
      URL + BUSINESSES + SEARCH + (QUERY && '?' + QUERY),
    );

    res.send(restaurantList);
  } catch (err) {
    res.status(404);
    res.json({ message: 'nothing' });
  }
};

const sendPathResult = async (req, res) => {
  const { path } = req;

  const restaurantDetail = await fetchURL(URL + BUSINESSES + path);
  const restaurantReview = await fetchURL(URL + BUSINESSES + path + '/reviews');

  res.send({ restaurantDetail, restaurantReview });
};

module.exports = { sendSearchResult, sendPathResult };
