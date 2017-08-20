const rp = require('request-promise');

function nflProxy(req, res) {
  rp({
    url: `http://api.fantasy.nfl.com/v1/players/news?format=json`,
    method: 'GET',
    json: true
  })
  .then((data) => {
    res.json(data);
  });
}

module.exports = {
  proxy: nflProxy
};
