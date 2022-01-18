const makeQuery = (query) =>
  Object.entries(query)
    .map((q) => q.join('='))
    .join('&');

module.exports = { makeQuery };
