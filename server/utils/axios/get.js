const { default: axios } = require('axios');

const { API_KEY } = process.env;

const getURLData = async URL => {
  try {
    const { data } = await axios(URL, {
      headers: { Authorization: API_KEY },
    });

    return data;
  } catch ({ message }) {
    console.error(message);
    res.status(400).send(message);
  }
};

module.exports = { getURLData };
