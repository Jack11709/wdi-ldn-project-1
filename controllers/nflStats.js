const rp = require('request-promise');

function editorsRanks(req, res){
  rp({
    url: `http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json`,
    method: 'GET',
    json: true
  })
  .then((data) => {
    res.json(data);
  });
}
function playerRanks(req, res){
  rp({
    url: `http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json`,
    method: 'GET',
    json: true
  })
  .then((data) => {
    res.json(data);
  });
}

module.exports = {
  proxyEditors: editorsRanks,
  proxyPlayers: playerRanks
};
