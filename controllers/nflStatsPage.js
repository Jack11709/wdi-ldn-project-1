const rp = require('request-promise');

function getStats(req, res){
  rp({
    url: `http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&${req.query.position}&format=json`,
    method: 'GET',
    json: true
  })
  .then((data) => {
    res.json(data);
  });
}

module.exports = {
  proxy: getStats
};
