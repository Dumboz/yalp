const { makeQuery } = require('../../utils');
const { fetchURL } = require('../../utils/axios/get');
const { AUTOCOMPLETE, URL } = process.env;

const sendAutocompleteWords = async (req, res) => {
  const { query } = req;
  console.log({ query });
  const QUERY = makeQuery(query);
  res.send(await fetchURL(URL + AUTOCOMPLETE + (QUERY && '?' + QUERY)));
};

module.exports = { sendAutocompleteWords };
