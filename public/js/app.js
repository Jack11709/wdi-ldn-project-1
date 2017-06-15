"use strict";function ranking(){var s=1;1===(s=Math.floor(4*Math.random())+1)?editorRanks():2===s?qbRanks():3===s?rbRanks():wrRanks()}function getNews(){$.get("http://api.fantasy.nfl.com/v1/players/news?format=json").done(function(s){for(var t=0;t<6;t++)$(".news").append('<h2 class="postTitle">'+s.news[t].body+"</h2><p>"+s.news[t].analysis+"</p><br>")})}function editorRanks(){$.get("http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json").done(function(s){$(".statslabel").html("2017 Editor's Draft Ranks");for(var t=0;t<15;t++)$(".stats").append("<li>"+s.players[t].position+" "+s.players[t].firstName+" "+s.players[t].lastName+"</li>")})}function qbRanks(){$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json").done(function(s){$(".statslabel").html("2016 QB Ranks");for(var t=0;t<15;t++)$(".stats").append("<li>"+s.positions.QB[t].firstName+" "+s.positions.QB[t].lastName+" : "+s.positions.QB[t].pts+" pts</li>")})}function rbRanks(){$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json").done(function(s){$(".statslabel").html("2016 RB Ranks");for(var t=0;t<15;t++)$(".stats").append("<li>"+s.positions.RB[t].firstName+" "+s.positions.RB[t].lastName+" : "+s.positions.RB[t].pts+" pts</li>")})}function wrRanks(){$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json").done(function(s){$(".statslabel").html("2016 WR Ranks");for(var t=0;t<15;t++)$(".stats").append("<li>"+s.positions.WR[t].firstName+" "+s.positions.WR[t].lastName+" : "+s.positions.WR[t].pts+" pts</li>")})}$(function(){getNews(),ranking(),$("#type").on("change",function(s){"all"===$(s.target).val()?$(".card").show():($(".card").show(),$(".card").not('[data-type="'+$(s.target).val()+'"]').hide())}),$("#statsForm").on("change",function(s){$(".statsTable").removeClass("hide"),$(".remove").remove();var t=$(s.target).val();$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&position="+t+"&format=json").done(function(s){for(var a=0;a<15;a++)$(".statsTable").append('<tr class="remove"><td>'+s.positions[""+t][a].rank+"</td><td>"+s.positions[""+t][a].firstName+" "+s.positions[""+t][a].lastName+"</td><td>"+s.positions[""+t][a].teamAbbr+"</td><td>"+s.positions[""+t][a].pts+"</td></tr>")})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJyYW5raW5nIiwicmJSYW5rcyIsIndyUmFua3MiLCJyYW5rUGlja2VyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZWRpdG9yUmFua3MiLCJxYlJhbmtzIiwiZ2V0TmV3cyIsImdldCIsIiQiLCJkYXRhIiwiaSIsImFwcGVuZCIsInBvc2l0aW9uIiwiYm9keSIsInBsYXllcnMiLCJmaXJzdE5hbWUiLCJkb25lIiwic3RhdHMiLCJsYXN0TmFtZSIsImh0bWwiLCJwb3NpdGlvbnMiLCJRQiIsInB0cyIsIlJCIiwiV1IiLCJvbiIsImUiLCJ0YXJnZXQiLCJ2YWwiLCJzaG93IiwiaGlkZSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwicG9zIiwicmFuayIsInRlYW1BYmJyIl0sIm1hcHBpbmdzIjoiYUF5Q0csU0FBTUEsVUFDTEMsSUFBQUEsRUFBQUEsRUFFQUMsS0FEREMsRUFBTUMsS0FBQUMsTUFBQSxFQUFBRCxLQUFBRSxVQUFBLEdBRU5DLGNBQ0YsSUFBQUosRUFOR0ssVUFTYyxJQUFUQyxFQUNMQyxVQUdFQyxVQU1OLFNBQVNKLFVBQ1BJLEVBQUVELElBQUksMERBRUpDLEtBQUUsU0FBQUMsR0FDRixJQUFBLElBQUlDLEVBQUlBLEVBQVJBLEVBQWVBLEVBQWZBLElBQ0VGLEVBQUUsU0FBRkcsT0FBQUgseUJBQTBCQyxFQUFpQkcsS0FBM0NGLEdBQUFHLEtBQUFMLFdBQTZETSxFQUFRSixLQUFHSyxHQUFBQSxTQUF4RVAsY0FNSkEsU0FBTUosY0FFSkksRUFBQUEsSUFBRSxzRUFDRlEsS0FBQSxTQUFLQyxHQUNIVCxFQUFBQSxlQUFZRyxLQUFaLDZCQUNELElBQUEsSUFBQUQsRUFBQSxFQUFBQSxFQUFBLEdBQUFBLElBTEhGLEVBQUEsVUFBQUcsT0FBQSxPQUFBTSxFQUFBSCxRQUFBSixHQUFBRSxTQUFBLElBQUFLLEVBQUFILFFBQUFKLEdBQUFLLFVBQUEsSUFBQUUsRUFBQUgsUUFBQUosR0FBQVEsU0FBQSxXQVlFVixTQUFFSCxVQUNGRyxFQUFBRCxJQUFBLGdGQUNFQyxLQUFFLFNBQUFTLEdBQ0hULEVBQUEsZUFBQVcsS0FBQSxpQkFMSCxJQUFBLElBQUFULEVBQUEsRUFBQUEsRUFBQSxHQUFBQSxJQU9ERixFQUFBLFVBQUFHLE9BQUEsT0FBQU0sRUFBQUcsVUFBQUMsR0FBQVgsR0FBQUssVUFBQSxJQUFBRSxFQUFBRyxVQUFBQyxHQUFBWCxHQUFBUSxTQUFBLE1BQUFELEVBQUFHLFVBQUFDLEdBQUFYLEdBQUFZLElBQUEsZUFNRyxTQUFLeEIsVUFDSFUsRUFBQUEsSUFBRSxnRkFDSFEsS0FBQSxTQUFBQyxHQUxIVCxFQUFBLGVBQUFXLEtBQUEsaUJBT0QsSUFBQSxJQUFBVCxFQUFBLEVBQUFBLEVBQUEsR0FBQUEsSUFiS0YsRUFBRSxVQUFVRyxPQUFaLE9BQTBCTSxFQUFNRyxVQUFVRyxHQUFHYixHQUFHSyxVQUFoRCxJQUE2REUsRUFBTUcsVUFBVUcsR0FBR2IsR0FBR1EsU0FBbkYsTUFBaUdELEVBQU1HLFVBQVVHLEdBQUdiLEdBQUdZLElBQXZILGVBS04sU0FBU3ZCLFVBQ1BTLEVBQUVELElBQUksZ0ZBQ0xTLEtBQUssU0FBQ0MsR0FDTFQsRUFBRSxlQUFlVyxLQUFLLGlCQUN0QixJQUFLLElBQUlULEVBQUksRUFBR0EsRUFBSSxHQUFLQSxJQUN2QkYsRUFBRSxVQUFVRyxPQUFaLE9BQTBCTSxFQUFNRyxVQUFVSSxHQUFHZCxHQUFHSyxVQUFoRCxJQUE2REUsRUFBTUcsVUFBVUksR0FBR2QsR0FBR1EsU0FBbkYsTUFBaUdELEVBQU1HLFVBQVVJLEdBQUdkLEdBQUdZLElBQXZILGVBOUZOZCxFQUFFLFdBQ0FGLFVBREFULFVBS0FXLEVBQUUsU0FBU2lCLEdBQUcsU0FBUyxTQUFDQyxHQUFELFFBQXJCbEIsRUFBQWtCLEVBQUZDLFFBQWNDLE1BQ1pwQixFQUFHQSxTQUFJbUIsUUFBUG5CLEVBQUEsU0FFT3FCLE9BQ0xyQixFQUFFLFNBQVNxQixJQUFYckIsZUFBQUEsRUFBQWtCLEVBQUFDLFFBQUFDLE1BQUFwQixNQUFBc0IsVUFNSnRCLEVBQUUsY0FBY2lCLEdBQUcsU0FBbkIsU0FBNEJDLEdBQzFCbEIsRUFBRSxlQUFldUIsWUFBWSxRQUM3QnZCLEVBQUUsV0FBV3dCLFNBQ2IsSUFBTUMsRUFBUVAsRUFBRUMsRUFBQUEsUUFBUUMsTUFDeEJwQixFQUFFRCxJQUFGQyw2RUFBQXlCLEVBQUF6QixnQkFFRVEsS0FBQSxTQUFJUCxHQUNGRCxJQUFFLElBQUFFLEVBQUEsRUFBQUEsRUFBZUMsR0FBQUEsSUFFbEJILEVBQUEsZUFBQUcsT0FBQSwwQkFBQUYsRUFBQVcsVUFBQSxHQUFBYSxHQUFBdkIsR0FBQXdCLEtBQUEsWUFBQXpCLEVBQUFXLFVBQUEsR0FBQWEsR0FBQXZCLEdBQUFLLFVBQUEsSUFBQU4sRUFBQVcsVUFBQSxHQUFBYSxHQUFBdkIsR0FBQVEsU0FBQSxZQUFBVCxFQUFBVyxVQUFBLEdBQUFhLEdBQUF2QixHQUFBeUIsU0FBQSxZQUFBMUIsRUFBQVcsVUFBQSxHQUFBYSxHQUFBdkIsR0FBQVksSUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgZ2V0TmV3cygpO1xuICByYW5raW5nKCk7XG5cblxuICAkKCcjdHlwZScpLm9uKCdjaGFuZ2UnLChlKSA9PiB7XG4gICAgaWYoJChlLnRhcmdldCkudmFsKCkgPT09ICdhbGwnKXtcbiAgICAgICQoJy5jYXJkJykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuY2FyZCcpLnNob3coKTtcbiAgICAgICQoJy5jYXJkJykubm90KGBbZGF0YS10eXBlPVwiJHskKGUudGFyZ2V0KS52YWwoKX1cIl1gKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcblxuXG4gICQoJyNzdGF0c0Zvcm0nKS5vbignY2hhbmdlJywoZSkgPT4ge1xuICAgICQoJy5zdGF0c1RhYmxlJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAkKCcucmVtb3ZlJykucmVtb3ZlKCk7XG4gICAgY29uc3QgcG9zID0gJChlLnRhcmdldCkudmFsKCk7XG4gICAgJC5nZXQoYGh0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmcG9zaXRpb249JHtwb3N9JmZvcm1hdD1qc29uYClcbiAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE1OyBpKyspe1xuICAgICAgICAkKCcuc3RhdHNUYWJsZScpLmFwcGVuZChgPHRyIGNsYXNzPVwicmVtb3ZlXCI+PHRkPiR7ZGF0YS5wb3NpdGlvbnNbYCR7cG9zfWBdW2ldLnJhbmt9PC90ZD48dGQ+JHtkYXRhLnBvc2l0aW9uc1tgJHtwb3N9YF1baV0uZmlyc3ROYW1lfSAke2RhdGEucG9zaXRpb25zW2Ake3Bvc31gXVtpXS5sYXN0TmFtZX08L3RkPjx0ZD4ke2RhdGEucG9zaXRpb25zW2Ake3Bvc31gXVtpXS50ZWFtQWJicn08L3RkPjx0ZD4ke2RhdGEucG9zaXRpb25zW2Ake3Bvc31gXVtpXS5wdHN9PC90ZD48L3RyPmApO1xuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG5cblxuXG5cbn0pO1xuXG5mdW5jdGlvbiByYW5raW5nKCl7XG4gIGxldCByYW5rUGlja2VyID0gMTtcbiAgcmFua1BpY2tlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMTtcbiAgaWYocmFua1BpY2tlciA9PT0gMSl7XG4gICAgZWRpdG9yUmFua3MoKTtcbiAgfSBlbHNlIGlmIChyYW5rUGlja2VyID09PSAyKXtcbiAgICBxYlJhbmtzKCk7XG4gIH0gZWxzZSBpZiAocmFua1BpY2tlciA9PT0gMyl7XG4gICAgcmJSYW5rcygpO1xuICB9IGVsc2Uge1xuICAgIHdyUmFua3MoKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGdldE5ld3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvbmV3cz9mb3JtYXQ9anNvbicpXG4gIC5kb25lKChkYXRhKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAkKCcubmV3cycpLmFwcGVuZChgPGgyIGNsYXNzPVwicG9zdFRpdGxlXCI+JHtkYXRhLm5ld3NbaV0uYm9keX08L2gyPjxwPiR7ZGF0YS5uZXdzW2ldLmFuYWx5c2lzfTwvcD48YnI+YCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBlZGl0b3JSYW5rcygpe1xuICAkLmdldCgnaHR0cDovL2FwaS5mYW50YXN5Lm5mbC5jb20vdjEvcGxheWVycy9lZGl0b3JkcmFmdHJhbmtzP2Zvcm1hdD1qc29uJylcbiAgLmRvbmUoKHN0YXRzKSA9PiB7XG4gICAgJCgnLnN0YXRzbGFiZWwnKS5odG1sKCcyMDE3IEVkaXRvclxcJ3MgRHJhZnQgUmFua3MnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTU7IGkrKyl7XG4gICAgICAkKCcuc3RhdHMnKS5hcHBlbmQoYDxsaT4ke3N0YXRzLnBsYXllcnNbaV0ucG9zaXRpb259ICR7c3RhdHMucGxheWVyc1tpXS5maXJzdE5hbWV9ICR7c3RhdHMucGxheWVyc1tpXS5sYXN0TmFtZX08L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHFiUmFua3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmZm9ybWF0PWpzb24nKVxuICAuZG9uZSgoc3RhdHMpID0+IHtcbiAgICAkKCcuc3RhdHNsYWJlbCcpLmh0bWwoJzIwMTYgUUIgUmFua3MnKTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IDE1IDsgaSsrKXtcbiAgICAgICQoJy5zdGF0cycpLmFwcGVuZChgPGxpPiR7c3RhdHMucG9zaXRpb25zLlFCW2ldLmZpcnN0TmFtZX0gJHtzdGF0cy5wb3NpdGlvbnMuUUJbaV0ubGFzdE5hbWV9IDogJHtzdGF0cy5wb3NpdGlvbnMuUUJbaV0ucHRzfSBwdHM8L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJiUmFua3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmZm9ybWF0PWpzb24nKVxuICAuZG9uZSgoc3RhdHMpID0+IHtcbiAgICAkKCcuc3RhdHNsYWJlbCcpLmh0bWwoJzIwMTYgUkIgUmFua3MnKTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IDE1IDsgaSsrKXtcbiAgICAgICQoJy5zdGF0cycpLmFwcGVuZChgPGxpPiR7c3RhdHMucG9zaXRpb25zLlJCW2ldLmZpcnN0TmFtZX0gJHtzdGF0cy5wb3NpdGlvbnMuUkJbaV0ubGFzdE5hbWV9IDogJHtzdGF0cy5wb3NpdGlvbnMuUkJbaV0ucHRzfSBwdHM8L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyUmFua3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmZm9ybWF0PWpzb24nKVxuICAuZG9uZSgoc3RhdHMpID0+IHtcbiAgICAkKCcuc3RhdHNsYWJlbCcpLmh0bWwoJzIwMTYgV1IgUmFua3MnKTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IDE1IDsgaSsrKXtcbiAgICAgICQoJy5zdGF0cycpLmFwcGVuZChgPGxpPiR7c3RhdHMucG9zaXRpb25zLldSW2ldLmZpcnN0TmFtZX0gJHtzdGF0cy5wb3NpdGlvbnMuV1JbaV0ubGFzdE5hbWV9IDogJHtzdGF0cy5wb3NpdGlvbnMuV1JbaV0ucHRzfSBwdHM8L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
