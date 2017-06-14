function indexRoute(req, res){
  res.render('stats/index');
}

module.exports = {
  index: indexRoute
};
