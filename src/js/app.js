$(() => {
  getNews();
  ranking();


  $('#type').on('change',(e) => {
    if($(e.target).val() === 'all'){
      $('.card').show();
    } else {
      $('.card').show();
      $('.card').not(`[data-type="${$(e.target).val()}"]`).hide();
    }
  });




});

function ranking(){
  let rankPicker = 1;
  rankPicker = Math.floor(Math.random() * 4) + 1;
  if(rankPicker === 1){
    editorRanks();
  } else if (rankPicker === 2){
    qbRanks();
  } else if (rankPicker === 3){
    rbRanks();
  } else {
    wrRanks();
  }
}


function getNews(){
  $.get('http://api.fantasy.nfl.com/v1/players/news?format=json')
  .done((data) => {
    for(let i = 0; i < 6; i++){
      $('.news').append(`<h2>${data.news[i].body}</h2><p>${data.news[i].analysis}</p><br>`);
    }
  });
}


function editorRanks(){
  $.get('http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json')
  .done((stats) => {
    $('.statslabel').html('2017 Editor\'s Draft Ranks');
    for(let i = 0; i < 15; i++){
      $('.stats').append(`<li>${stats.players[i].position} ${stats.players[i].firstName} ${stats.players[i].lastName}</li>`);
    }
  });
}

function qbRanks(){
  $.get('http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json')
  .done((stats) => {
    $('.statslabel').html('2016 QB Ranks');
    for( let i = 0; i < 15 ; i++){
      $('.stats').append(`<li>${stats.positions.QB[i].firstName} ${stats.positions.QB[i].lastName} : ${stats.positions.QB[i].pts} pts</li>`);
    }
  });
}

function rbRanks(){
  $.get('http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json')
  .done((stats) => {
    $('.statslabel').html('2016 RB Ranks');
    for( let i = 0; i < 15 ; i++){
      $('.stats').append(`<li>${stats.positions.RB[i].firstName} ${stats.positions.RB[i].lastName} : ${stats.positions.RB[i].pts} pts</li>`);
    }
  });
}

function wrRanks(){
  $.get('http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json')
  .done((stats) => {
    $('.statslabel').html('2016 WR Ranks');
    for( let i = 0; i < 15 ; i++){
      $('.stats').append(`<li>${stats.positions.WR[i].firstName} ${stats.positions.WR[i].lastName} : ${stats.positions.WR[i].pts} pts</li>`);
    }
  });
}
