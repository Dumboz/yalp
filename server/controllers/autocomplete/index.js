const { AUTOCOMPLETE, URL } = process.env;
const { makeQuery } = require('../../utils');
const { getURLData } = require('../../utils/axios/get');

const sendAutocompleteWords = async (req, res) => {
  const { query } = req;
  const QUERY = makeQuery(query);
  res.send(await getURLData(URL + AUTOCOMPLETE + (QUERY && '?' + QUERY)));
};

module.exports = { sendAutocompleteWords };
