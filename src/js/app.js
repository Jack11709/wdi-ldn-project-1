$(() => {
  $.ajax({
    url: '/news',
    method: 'GET'
  })
  .then((data) => {
    for(let i = 0; i < 6; i++){
      $('.news').append(`<h2 class="postTitle">${data.news[i].body}</h2><p>${data.news[i].analysis}</p><br>`);
    }
  });


  $('#type').on('change',(e) => {
    if($(e.target).val() === 'all'){
      $('.card').show();
    } else {
      $('.card').show();
      $('.card').not(`[data-type="${$(e.target).val()}"]`).hide();
    }
  });


  $('#statsForm').on('change',(e) => {
    $('.statsTable').removeClass('hide');
    $('.remove').remove();
    const pos = $(e.target).val();
    $.ajax({
      url: '/statsPage',
      method: 'GET',
      qs: {
        position: pos
      }
    })
    .done((data) => {
      for(let i = 0; i < 15; i++){
        $('.statsTable').append(`<tr class="remove"><td>${data.positions[`${pos}`][i].rank}</td><td>${data.positions[`${pos}`][i].firstName} ${data.positions[`${pos}`][i].lastName}</td><td>${data.positions[`${pos}`][i].teamAbbr}</td><td>${data.positions[`${pos}`][i].pts}</td></tr>`);

      }
    });

  });


  ranking();

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

function editorRanks() {
  $.ajax({
    url: '/statsBar',
    method: 'GET'
  })
  .then((stats) => {
    for(let i = 0; i < 15; i++){
      $('.statslabel').html('2017 Editors Draft Ranks');
      $('.stats').append(`<li>${stats.players[i].position} ${stats.players[i].firstName} ${stats.players[i].lastName}</li>`);
    }
  });
}


function qbRanks(){
  $.ajax({
    url: '/playersRanks',
    method: 'GET'
  })
  .done((stats) => {
    console.log('i have run', stats);
    $('.statslabel').html('2016 QB Ranks');
    for( let i = 0; i < 15 ; i++){
      $('.stats').append(`<li>${stats.positions.QB[i].firstName} ${stats.positions.QB[i].lastName} : ${stats.positions.QB[i].pts} pts</li>`);
    }
  });
}

function rbRanks(){
  $.ajax({
    url: '/playersRanks',
    method: 'GET'
  })
  .done((stats) => {
    console.log('i have run', stats);
    $('.statslabel').html('2016 RB Ranks');
    for( let i = 0; i < 15 ; i++){
      $('.stats').append(`<li>${stats.positions.RB[i].firstName} ${stats.positions.RB[i].lastName} : ${stats.positions.RB[i].pts} pts</li>`);
    }
  });
}

function wrRanks(){
  $.ajax({
    url: '/playersRanks',
    method: 'GET'
  })
  .done((stats) => {
    console.log('i have run', stats);
    $('.statslabel').html('2016 WR Ranks');
    for( let i = 0; i < 15 ; i++){
      $('.stats').append(`<li>${stats.positions.WR[i].firstName} ${stats.positions.WR[i].lastName} : ${stats.positions.WR[i].pts} pts</li>`);
    }
  });
}
