module.exports = sendAutocompleteWords = async (req, res) => {
  try {
    const { query } = req;
    const QUERY = makeQuery(query);
    const { data } = await axios(URL + AUTOCOMPLETE + (QUERY && '?' + QUERY), {
      headers: { Authorization: API_KEY },
    });

    res.send(data);
  } catch ({ message }) {
    console.error(message);
    res.status(400).send(message);
  }
};
