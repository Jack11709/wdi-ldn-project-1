const rp = require('request-promise');

function getStatsBar(req, res){
  rp({
    url: `http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json`,
    method: 'GET',
    json: true
  })
  .then((data) => {
    res.json(data);
  });
}

module.exports = {
  proxy: getStatsBar
};
