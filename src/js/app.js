$(() => {
  $.get('http://api.fantasy.nfl.com/v1/players/news')
  .done((data) => console.log(data));
});
