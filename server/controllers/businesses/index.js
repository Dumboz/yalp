const { getURLData } = require('../../utils/axios/get');
const { makeQuery } = require('../../utils');

const { URL, BUSINESSES, SEARCH } = process.env;

const sendSearchResult = async (req, res) => {
  const { query } = req;
  const QUERY = makeQuery(query);

  res.send(
    await getURLData(URL + BUSINESSES + SEARCH + (QUERY && '?' + QUERY))
  );
};

const sendPathResult = async (req, res) => {
  const { path } = req;

  res.send(await getURLData(URL + BUSINESSES + path));
};

module.exports = { sendSearchResult, sendPathResult };
