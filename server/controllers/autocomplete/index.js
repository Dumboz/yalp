const { AUTOCOMPLETE, URL } = process.env;
const { makeQuery } = require('../../utils');
const { getURLData } = require('../../utils/axios/get');

const sendAutocompleteWords = async (req, res) => {
  const { query } = req;
  const QUERY = makeQuery(query);
  try {
    const { data } = await axios(URL + AUTOCOMPLETE + (QUERY && '?' + QUERY), {
      headers: { Authorization: API_KEY },
    });
    res.send(data);
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = { sendAutocompleteWords };
