"use strict";function ranking(){var s=1;1===(s=Math.floor(4*Math.random())+1)?editorRanks():2===s?qbRanks():3===s?rbRanks():wrRanks()}function getNews(){$.get("http://api.fantasy.nfl.com/v1/players/news?format=json").done(function(s){for(var a=0;a<6;a++)$(".news").append("<h2>"+s.news[a].body+"</h2><p>"+s.news[a].analysis+"</p><br>")})}function editorRanks(){$.get("http://api.fantasy.nfl.com/v1/players/editordraftranks?format=json").done(function(s){$(".statslabel").html("2017 Editor's Draft Ranks");for(var a=0;a<15;a++)$(".stats").append("<li>"+s.players[a].position+" "+s.players[a].firstName+" "+s.players[a].lastName+"</li>")})}function qbRanks(){$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json").done(function(s){$(".statslabel").html("2016 QB Ranks");for(var a=0;a<15;a++)$(".stats").append("<li>"+s.positions.QB[a].firstName+" "+s.positions.QB[a].lastName+" : "+s.positions.QB[a].pts+" pts</li>")})}function rbRanks(){$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json").done(function(s){$(".statslabel").html("2016 RB Ranks");for(var a=0;a<15;a++)$(".stats").append("<li>"+s.positions.RB[a].firstName+" "+s.positions.RB[a].lastName+" : "+s.positions.RB[a].pts+" pts</li>")})}function wrRanks(){$.get("http://api.fantasy.nfl.com/v1/players/scoringleaders?season=2016&format=json").done(function(s){$(".statslabel").html("2016 WR Ranks");for(var a=0;a<15;a++)$(".stats").append("<li>"+s.positions.WR[a].firstName+" "+s.positions.WR[a].lastName+" : "+s.positions.WR[a].pts+" pts</li>")})}$(function(){getNews(),ranking(),$("#type").on("change",function(s){"all"===$(s.target).val()?$(".card").show():($(".card").show(),$(".card").not('[data-type="'+$(s.target).val()+'"]').hide())})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJyYW5rUGlja2VyIiwiZWRpdG9yUmFua3MiLCJxYlJhbmtzIiwicmFuZG9tIiwicmJSYW5rcyIsIndyUmFua3MiLCJnZXROZXdzIiwiJCIsImdldCIsImRvbmUiLCJkYXRhIiwiaSIsIm5ld3MiLCJib2R5IiwiYW5hbHlzaXMiLCJzdGF0cyIsImh0bWwiLCJhcHBlbmQiLCJwbGF5ZXJzIiwicG9zaXRpb24iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBvc2l0aW9ucyIsIlFCIiwicHRzIiwiV1IiLCJyYW5raW5nIiwib24iLCJlIiwidGFyZ2V0IiwidmFsIiwic2hvdyIsImhpZGUiXSwibWFwcGluZ3MiOiJhQXNCRSxTQUFHQSxVQUNEQyxJQUFBQSxFQUFBQSxFQUVBQyxLQURERixFQUFVQSxLQUFBQSxNQUFpQixFQUFqQkEsS0FBaUJHLFVBQUEsR0FBckJGLGNBR0xHLElBQUFBLEVBREtGLFVBR0xHLElBQUFBLEVBQ0RELFVBRENDLFVBVUMsU0FBQUMsVUFDRkMsRUFMREMsSUFBQSwwREFNREMsS0FBQSxTQUFBQyxHQUpHLElBQUksSUFBSUMsRUFBSSxFQUFHQSxFQUFJLEVBQUdBLElBTzFCSixFQUFBLFNBQVNOLE9BQVQsT0FBc0JTLEVBQUFFLEtBQUFELEdBQUFFLEtBQXRCLFdBQXNCSCxFQUFBRSxLQUFBRCxHQUFBRyxTQUF0QixjQU9HLFNBTkRiLGNBT0RNLEVBQUFDLElBQUEsc0VBTkVDLEtBQUssU0FBQ00sR0FRVFIsRUFBQSxlQUFrQlMsS0FBQSw2QkFDZFIsSUFBSSxJQUFBRyxFQUFBLEVBQUFBLEVBQUEsR0FBQUEsSUFFRkosRUFBQSxVQUFBVSxPQUFBLE9BQW9CRixFQUFBRyxRQUF0QlAsR0FBQVEsU0FBRSxJQUFGSixFQUFBRyxRQUFBUCxHQUFBUyxVQUFFLElBQUZMLEVBQUFHLFFBQUFQLEdBQUFVLFNBQUUsV0FLTCxTQUFBbkIsVUFQQ0ssRUFBRUMsSUFBSSxnRkFTUkMsS0FBQSxTQUFTTCxHQUNMSSxFQUFBQSxlQUFJUSxLQUFBLGlCQUVKVCxJQUFFLElBQUFJLEVBQUEsRUFBRkEsRUFBaUJLLEdBQUtMLElBQ3RCSixFQUFBLFVBQUFVLE9BQUEsT0FBQUYsRUFBNkJPLFVBQUFDLEdBQUFaLEdBQUFTLFVBQTdCLElBQTZCTCxFQUFBTyxVQUFBQyxHQUFBWixHQUFBVSxTQUE3QixNQUE2Qk4sRUFBQU8sVUFBQUMsR0FBQVosR0FBQWEsSUFBN0IsZUFKSixTQUFTcEIsVUFVVEcsRUFBQUMsSUFBQSxnRkFDRUQsS0FBTSxTQUFBUSxHQUVKUixFQUFFLGVBQWVTLEtBQUssaUJBQ3RCLElBQUssSUFBSUwsRUFBSSxFQUFHQSxFQUFJLEdBQUtBLElBQ3ZCSixFQUFFLFVBQVVVLE9BQVpWLE9BQUFRLEVBQTBCQSxVQUFNTyxHQUFVRyxHQUFoQkwsVUFBMUJiLElBQUFRLEVBQUFPLFVBQW1FQSxHQUFBQSxHQUFORCxTQUE3RGQsTUFBbUZjLEVBQW5GQyxVQUFpR1AsR0FBTU8sR0FBQUEsSUFBdkdmLGVBTE4sU0FBU0YsVUFDUEUsRUFBRUMsSUFBSSxnRkFDTEMsS0FBSyxTQUFDTSxHQUNMUixFQUFFLGVBQWVTLEtBQUssaUJBQ3RCLElBQUssSUFBSUwsRUFBSSxFQUFHQSxFQUFJLEdBQUtBLElBQ3ZCSixFQUFFLFVBQVVVLE9BQVosT0FBMEJGLEVBQU1PLFVBQVVHLEdBQUdkLEdBQUdTLFVBQWhELElBQTZETCxFQUFNTyxVQUFVRyxHQUFHZCxHQUFHVSxTQUFuRixNQUFpR04sRUFBTU8sVUFBVUcsR0FBR2QsR0FBR2EsSUFBdkgsZUEvRU5qQixFQUFFLFdBQ0FELFVBREFvQixVQUtBbkIsRUFBRSxTQUFTb0IsR0FBRyxTQUFTLFNBQUNDLEdBQUQsUUFBckJyQixFQUFBcUIsRUFBRkMsUUFBY0MsTUFDWnZCLEVBQUdBLFNBQUlzQixRQUFQdEIsRUFBQSxTQUVPd0IsT0FDTHhCLEVBQUUsU0FBU3dCLElBQVh4QixlQUFBQSxFQUFBcUIsRUFBQUMsUUFBQUMsTUFBQXZCLE1BQUF5QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgZ2V0TmV3cygpO1xuICByYW5raW5nKCk7XG5cblxuICAkKCcjdHlwZScpLm9uKCdjaGFuZ2UnLChlKSA9PiB7XG4gICAgaWYoJChlLnRhcmdldCkudmFsKCkgPT09ICdhbGwnKXtcbiAgICAgICQoJy5jYXJkJykuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuY2FyZCcpLnNob3coKTtcbiAgICAgICQoJy5jYXJkJykubm90KGBbZGF0YS10eXBlPVwiJHskKGUudGFyZ2V0KS52YWwoKX1cIl1gKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcblxuXG5cblxufSk7XG5cbmZ1bmN0aW9uIHJhbmtpbmcoKXtcbiAgbGV0IHJhbmtQaWNrZXIgPSAxO1xuICByYW5rUGlja2VyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxO1xuICBpZihyYW5rUGlja2VyID09PSAxKXtcbiAgICBlZGl0b3JSYW5rcygpO1xuICB9IGVsc2UgaWYgKHJhbmtQaWNrZXIgPT09IDIpe1xuICAgIHFiUmFua3MoKTtcbiAgfSBlbHNlIGlmIChyYW5rUGlja2VyID09PSAzKXtcbiAgICByYlJhbmtzKCk7XG4gIH0gZWxzZSB7XG4gICAgd3JSYW5rcygpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0TmV3cygpe1xuICAkLmdldCgnaHR0cDovL2FwaS5mYW50YXN5Lm5mbC5jb20vdjEvcGxheWVycy9uZXdzP2Zvcm1hdD1qc29uJylcbiAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICQoJy5uZXdzJykuYXBwZW5kKGA8aDI+JHtkYXRhLm5ld3NbaV0uYm9keX08L2gyPjxwPiR7ZGF0YS5uZXdzW2ldLmFuYWx5c2lzfTwvcD48YnI+YCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBlZGl0b3JSYW5rcygpe1xuICAkLmdldCgnaHR0cDovL2FwaS5mYW50YXN5Lm5mbC5jb20vdjEvcGxheWVycy9lZGl0b3JkcmFmdHJhbmtzP2Zvcm1hdD1qc29uJylcbiAgLmRvbmUoKHN0YXRzKSA9PiB7XG4gICAgJCgnLnN0YXRzbGFiZWwnKS5odG1sKCcyMDE3IEVkaXRvclxcJ3MgRHJhZnQgUmFua3MnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTU7IGkrKyl7XG4gICAgICAkKCcuc3RhdHMnKS5hcHBlbmQoYDxsaT4ke3N0YXRzLnBsYXllcnNbaV0ucG9zaXRpb259ICR7c3RhdHMucGxheWVyc1tpXS5maXJzdE5hbWV9ICR7c3RhdHMucGxheWVyc1tpXS5sYXN0TmFtZX08L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHFiUmFua3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmZm9ybWF0PWpzb24nKVxuICAuZG9uZSgoc3RhdHMpID0+IHtcbiAgICAkKCcuc3RhdHNsYWJlbCcpLmh0bWwoJzIwMTYgUUIgUmFua3MnKTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IDE1IDsgaSsrKXtcbiAgICAgICQoJy5zdGF0cycpLmFwcGVuZChgPGxpPiR7c3RhdHMucG9zaXRpb25zLlFCW2ldLmZpcnN0TmFtZX0gJHtzdGF0cy5wb3NpdGlvbnMuUUJbaV0ubGFzdE5hbWV9IDogJHtzdGF0cy5wb3NpdGlvbnMuUUJbaV0ucHRzfSBwdHM8L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJiUmFua3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmZm9ybWF0PWpzb24nKVxuICAuZG9uZSgoc3RhdHMpID0+IHtcbiAgICAkKCcuc3RhdHNsYWJlbCcpLmh0bWwoJzIwMTYgUkIgUmFua3MnKTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IDE1IDsgaSsrKXtcbiAgICAgICQoJy5zdGF0cycpLmFwcGVuZChgPGxpPiR7c3RhdHMucG9zaXRpb25zLlJCW2ldLmZpcnN0TmFtZX0gJHtzdGF0cy5wb3NpdGlvbnMuUkJbaV0ubGFzdE5hbWV9IDogJHtzdGF0cy5wb3NpdGlvbnMuUkJbaV0ucHRzfSBwdHM8L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdyUmFua3MoKXtcbiAgJC5nZXQoJ2h0dHA6Ly9hcGkuZmFudGFzeS5uZmwuY29tL3YxL3BsYXllcnMvc2NvcmluZ2xlYWRlcnM/c2Vhc29uPTIwMTYmZm9ybWF0PWpzb24nKVxuICAuZG9uZSgoc3RhdHMpID0+IHtcbiAgICAkKCcuc3RhdHNsYWJlbCcpLmh0bWwoJzIwMTYgV1IgUmFua3MnKTtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IDE1IDsgaSsrKXtcbiAgICAgICQoJy5zdGF0cycpLmFwcGVuZChgPGxpPiR7c3RhdHMucG9zaXRpb25zLldSW2ldLmZpcnN0TmFtZX0gJHtzdGF0cy5wb3NpdGlvbnMuV1JbaV0ubGFzdE5hbWV9IDogJHtzdGF0cy5wb3NpdGlvbnMuV1JbaV0ucHRzfSBwdHM8L2xpPmApO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
