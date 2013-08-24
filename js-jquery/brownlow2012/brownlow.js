/**
*
* @author: Hafeez Syed - hafeez.syed@news.com.au
* @type: jquery plugin
* @project: Brownlow
* @description: Styles for AFL Brownlow Medal
*
*/
/**
* REFER TO http://jquery.com/
*
*/
(function ($) {

	"use strict";

	var reload = false;
	window["timers"] = true;
	window["currentRound"] = 0;
	window["selectedRound"] = 1;
	window["currentMatch"] = 0;
	window["currentVotingMatch"] = 0;
	window["selectedMatch"] = 1;

	var playersObj = {},
		teamsObj = {};

	$.fn.Brownlow = function (options) {
	
		if (!this.length) {
			return;
		}
		
		var $opts = $.extend({}, $.fn.Brownlow.defaults, options);
		
		
		var playersObj = {},teamsObj = {}, firstLoad = false, currentLoad = false;
	
		try {
			
			//have to call it once for on page load, the everyTime function starts after [time]
			$.getJSON($opts.jsonBase + $opts.playerJsonURL + "?" + Math.round(new Date().getTime()),function(data){
				if(data === null){return;} 
				$.fn.Brownlow.processPlayers(data);
				$.getJSON($opts.jsonBase + $opts.teamJsonURL + "?" + Math.round(new Date().getTime()),function(data){
					if(data === null){return;} 
					$.fn.Brownlow.processTeams(data);
					$.getJSON($opts.jsonBase + $opts.matchJsonURL + "?" + Math.round(new Date().getTime()),function(data){
						if(data === null){return;} 
						$.fn.Brownlow.processMatches(data, reload);
						firstLoad = true;
					});
				});
			});
			
			/* PROD */
			$(document).everyTime('30s', function(i) {
				if(firstLoad && !currentLoad){
					currentLoad = true;
					$.getJSON($opts.jsonBase + $opts.playerJsonURL + "?" + Math.round(new Date().getTime()),function(data){ 
						if(data === null){return;} 
						$.fn.Brownlow.processPlayers(data);
						$.getJSON($opts.jsonBase + $opts.matchJsonURL + "?" + Math.round(new Date().getTime()),function(data){ 
							if(data === null){return;} 
							reload = true;
							$.fn.Brownlow.processMatches(data, reload);
						});
					});
				}
			});
			
			
		}
		catch (error) {
			console.log('JSON not found');
			console.log(error);
			return false;
		}


		return this.not($opts.readyClass).each(function () {
		
			$(".round-select a").click(function(e){
				$.fn.Brownlow.rounds(e, $(this), options);
			});
			
			$(document).on("click", ".matches li", function(e){
				$.fn.Brownlow.match(e, $(this));
			});
			
			$(document).on("click", "a.playerpop", function(e){
				$.fn.Brownlow.player(e, $(this), options);
			});
		
			// handled by processMatches
			//$(".round-select a").eq(0).trigger("click");
		}).addClass($opts.readyClass);
	
	};
	
	// put all players into global object
	$.fn.Brownlow.processPlayers = function(data){
		playersObj = data.brownlowPlayerProfiles.player;
		
		// break playersObj into seperate player objects
		$.each(playersObj, function(i,p){
			window["player-"+p.playerId] = {};
			var prop;
			for(prop in p){
				if(p.hasOwnProperty(prop)){
					window["player-"+p.playerId][prop] = p[prop];
				}
			}	
		});
	};
	
	// put all teams into global object
	$.fn.Brownlow.processTeams = function(data){
		teamsObj = data.brownlowTeams.team;
		
		// break teamsObj into seperate team objects
		$.each(teamsObj, function(i,t){
			window["team-"+t.squadId] = {};	
			window["team-"+t.squadId].name = t.name;
			window["team-"+t.squadId].shortname = t.shortname;
		});
	};
	
	// click function for rounds
	$.fn.Brownlow.rounds = function (e, o, options) {	 
						
		e.preventDefault();
		
		var $opts = $.extend({}, $.fn.Brownlow.defaults, options);
		
		$(".round-select li").removeClass("on");
		o.parent().addClass("on");

		window["selectedRound"] = o.text();
		
		//console.log('current:'+window["currentRound"]);
		//console.log('selected:'+window["selectedRound"]);
		
		var firstLoad = false;
		
		if(reload && window["currentRound"] > 0){
			//check for live, if not stop timers
			var live = o.parent().hasClass("live");
			//console.log(live);
			if(!live){
				window["timers"] = false;
				$(document).stopTime();
			}
			if(live && !window["timers"]){
				window["timers"] = true;
				try {
				
					//have to call it once for on page load, the everyTime function starts after [time]
					$.getJSON($opts.jsonBase + $opts.playerJsonURL + "?" + Math.round(new Date().getTime()),function(data){
						if(data === null){return;} 
						$.fn.Brownlow.processPlayers(data);
						$.getJSON($opts.jsonBase + $opts.matchJsonURL + "?" + Math.round(new Date().getTime()),function(data){
							if(data === null){return;} 
							$.fn.Brownlow.processMatches(data, reload);
							firstLoad = true;
						});
					});
					
					
					$(document).everyTime('30s', function(i) {
						if(firstLoad){
							$.getJSON($opts.jsonBase + $opts.playerJsonURL + "?" + Math.round(new Date().getTime()),function(data){ 
								if(data === null){return;} 
								$.fn.Brownlow.processPlayers(data);
								$.getJSON($opts.jsonBase + $opts.matchJsonURL + "?" + Math.round(new Date().getTime()),function(data){ 
									if(data === null){return;} 
									reload = true;
									$.fn.Brownlow.processMatches(data, reload);
								});
							});
						}
					});
					
				}
				catch (error) {
					console.log('JSON not found');
					console.log(error);
					return false;
				}
			}
		}
		
		$(".matches ul").hide();
		$(".matches .round-"+window["selectedRound"]).show();
		
		//console.log('roundclick:'+window["selectedMatch"]);
		if(o.parent().hasClass("live")){
			$(".matches .round-"+window["selectedRound"]+" li").filter(function(){
					return $(this).data("match") == window["currentMatch"];
				}).trigger("click");
		}else{
			$(".matches .round-"+window["selectedRound"]+" li:first-child").trigger("click");		
		}
	};
	
	// click function for matches
	$.fn.Brownlow.match = function (e, o) {
			
		e.preventDefault();
		
		var roundNo = o.data("round"),
		gameNo = o.data("game"),
		selectedMatch = o.data("match");
		
		window["selectedMatch"] = selectedMatch;
		//console.log('matchclick:'+window["selectedMatch"]);
		
		$(".matches li").removeClass("on");
		o.addClass("on");
		
		$(".match-info").hide();
		$(".match-info.round-"+roundNo+".game-"+gameNo).show();
	
	};
	
	// build player popup
	$.fn.Brownlow.player = function (e, o, options) {
   
		e.preventDefault();
	
		var $opts = $.extend({}, $.fn.Brownlow.defaults, options);		

		var $popupContent,
			playerId = o.data("player-id"),
			playerInfo = false, 
			playerName,
			teamId,
			teamName,
			teamShortName,
			playerImg, playerNumber,
			playerWeight,
			playerMatches,
			playerHeight,
			playerDOB,
			playerGoals,
			playerTotalVotes,
			playerPredVotes,
			playerPrediction,
			thisPlayerObj = window["player-"+playerId];	
		
		// build player details
		
		if($.isEmptyObject(window["player-"+playerId])){return;}		
		
		playerName = thisPlayerObj.firstname + ' ' + thisPlayerObj.surname;
		teamId = thisPlayerObj.squadId;
		teamName = window["team-"+teamId].name;
		teamShortName = window["team-"+teamId].shortname;
		playerNumber = thisPlayerObj.jumperNumber;
		playerWeight = thisPlayerObj.weight;
		playerMatches = thisPlayerObj.careerMatches;
		playerHeight = thisPlayerObj.height;
		playerDOB = thisPlayerObj.dob;
		playerGoals = thisPlayerObj.careerGoals;
		playerPrediction = thisPlayerObj.scPredTotal;
		if(thisPlayerObj.totalVotes === 0){
			playerTotalVotes = 0;
		}else if(thisPlayerObj.votes && thisPlayerObj.votes.total){
			playerTotalVotes = thisPlayerObj.votes.total;
		}else{
			playerTotalVotes = thisPlayerObj.totalVotes;
		}
		//playerTotalVotes = thisPlayerObj.totalVotes == "undefined" ? thisPlayerObj.votes.total : thisPlayerObj.totalVotes;
		
		
		var $rounds = $("<div/>",{'class':'rounds'}),
			$liveVotes = $("<div/>",{'class':'live-votes'}),
			$hsVotes = $("<div/>",{'class':'hs-votes'}),
			$supercoachVotes = $("<div/>",{'class':'supercoach-votes'}),
			i;
		
		// build player votes
		for(i=1;i<24;i++){
		
			var cssClass = "", liveVoteText = "",hsVoteText = "",scVoteText = "", bye = false, dp = false;
			
			//round no
			$rounds.append($("<div/>").text(i));
			
			//live
			$.each(thisPlayerObj.votes, function(j,o){
				var liveRound = "r"+i;
				if(liveRound == j){
					if(o == 'X'){
						cssClass = "dp";
						dp = true;
					}else if(o == 'B'){
						cssClass = "bye";
						bye = true;
					}else{
						cssClass = "vote";
						liveVoteText = o;
					}
					
				}
			});
			$liveVotes.append($("<div/>",{'class':cssClass}).text(liveVoteText));
			
			
			cssClass = "";
			//heraldsun
			if(bye || dp){
				cssClass = bye === true ? "bye" : "dp";
			}else{
				
				$.each(thisPlayerObj.hsPred, function(k,p){
					var liveRound = "r"+i;
					if(liveRound == k){
						cssClass = "vote";
						hsVoteText = p;						
					}
				});
			}
			$hsVotes.append($("<div/>",{'class':cssClass}).text(hsVoteText));
			
			cssClass = "";
			//supercoach
			if(bye || dp){
				cssClass = bye === true ? "bye" : "dp";
			}else{
				cssClass = "";
				$.each(thisPlayerObj.scPred, function(l,q){
					var liveRound = "r"+i;
					if(liveRound == l){
						cssClass = "vote";
						scVoteText = q;						
					}
				});
			}
			$supercoachVotes.append($("<div/>",{'class':cssClass}).text(scVoteText));
		}
		
		$popupContent = $("<div/>", {'class': $opts.popupClass + '-inner'})
			.append($("<div/>", {'class': $opts.popupClass + '-header'})
				.append($("<div/>", {'class': $opts.popupClass + '-player-name'})
					.text(teamName + " - " + playerName))
				.append($("<div/>", {'class': $opts.popupClass + '-close'})
					.text("CLOSE X"))
			)
			.append($("<div/>", {'class': $opts.popupClass + '-info-container'})
				.append($("<div/>", {'class': $opts.popupClass + '-player-info'})
					.append($("<div/>", {'class': $opts.popupClass + '-player-image'})
						.append($("<img/>", {'src': 'http://superstats.heraldsun.com.au/ss3/images/headshots/'+playerId+'_sml.jpg'})))
					.append($("<div/>", {'class': $opts.popupClass + '-player-details'})
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-team ' + teamShortName})
							.text(teamName))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-name'})
							.text(playerName))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-number'})
							.html("<strong>player number:</strong> " + playerNumber))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-weight'})
							.html("<strong>weight:</strong> " + playerWeight + "kg"))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-height'})
							.html("<strong>height:</strong> " + playerHeight + "cm"))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-dob'})
							.html("<strong>dob:</strong> " + playerDOB))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-matches'})
							.html("<strong>career matches:</strong> " + playerMatches))
						.append($("<div/>", {'class': $opts.popupClass + '-player-details-goals'})
							.html("<strong>career goals:</strong> " + playerGoals))
					)
					.append($("<div/>", {'class': $opts.popupClass + '-player-total'})
						.append($("<div/>", {'class': $opts.popupClass + '-player-total-votes'})
							.html('<div class="polled">votes polled</div><div class="total">' + playerTotalVotes + '</div><div class="predicted">predicted votes: ' + playerPrediction + '</div>')
						)
					)
				)
			)
			.append($("<div/>", {'class': $opts.popupClass + '-votes-container'})
				.append($("<div/>", {'class': $opts.popupClass + '-rounds'})
					.append($("<div/>", {'class':'title'}).html("&nbsp;"))
					.append($rounds))
				.append($("<div/>", {'class': $opts.popupClass + '-live-votes'})
					.append($("<div/>", {'class':'title'}).text("live votes"))
					.append($liveVotes))
				.append($("<div/>", {'class': $opts.popupClass + '-hs-votes'})
					.append($("<div/>", {'class':'title'}).text("superfooty forecast"))
					.append($hsVotes))
				.append($("<div/>", {'class': $opts.popupClass + '-supercoach-votes'})
					.append($("<div/>", {'class':'title'}).text("supercoach forecast"))
					.append($supercoachVotes))
				.append($("<div/>", {'class': $opts.popupClass + '-legend'})
					.append($("<div/>", {'class': $opts.popupClass + '-didnt-play'})
						.html("<div>X</div><div> = DIDN\'T PLAY"))
					.append($("<div/>", {'class': $opts.popupClass + '-bye'})
						.html("<div>B</div><div> = BYE"))
				)
			);
			
		var $popup = $('<div/>', {'class': $opts.popupClass}).append($popupContent).hide();
		
		
		// close any existing windows
		$('.'+$opts.popupClass).trigger('close');
		
		// instantiate the popup.
		$popup.lightbox_me({
			centered: true,
			destroyOnClose: true,
			showOverlay: true,
			overlayCSS: {
				background: 'black',
				opacity: 0.4
			},
			closeClick: true,
			closeEsc: true,
			closeSelector: '.' + $opts.popupClass + '-close',
			onClose: function() {
				//popupActive = false;
			}
		});

	
	};
	

	
	
	$.fn.Brownlow.buildLeaderboards = function(leaderboard, data){
	
		var $leaderboardTable;
		
		switch(leaderboard){
			case "live":
				$leaderboardTable = $('.leaderboards-container .live').find("table");
				break;
			case "hs":
				$leaderboardTable = $('.leaderboards-container .hs').find("table");
				break;
			case "sc":
				$leaderboardTable = $('.leaderboards-container .supercoach').find("table");
				break;
		}
		
		$leaderboardTable.empty();

		if(data){
			var $playerRow;
			$.each(data, function(i,leader){
			
				if(i==20){return false;}
				
				var playerId = leader.playerId,
					name = leader.playerName,
					teamid = leader.squadId,
					votes = leader.votes,
					teamshortname = window["team-"+teamid].shortname,
					cssClassPlayer = "player",
					cssClassTally = "tally";	
						
				
			
				cssClassPlayer += i % 2 ? " odd" : "";
				cssClassPlayer += " "+teamshortname;
				
				cssClassTally += i % 2 ? " odd" : "";		
				
				$playerRow = $("<tr/>")
					.append($("<td/>", {"class": cssClassPlayer})
					.append($("<a/>", {"class":"playerpop","data-player-id":playerId,"href":""}).text(name)))
					.append($("<td/>", {"class": cssClassTally}).text(votes));
				
				$leaderboardTable.append($playerRow);
			});
		}
	
	};
	
	
	// main processing function
	// - call to build leaderboard
	// - build round by round match nav
	// - build match info
	// - build match votes
	$.fn.Brownlow.processMatches = function(data, reload){
		
		
		var liveLeaderBoard,
			hsLeaderBoard,
			scLeaderBoard,
			currentRound,
			preCount;

		var rounds;

		var $roundInfoDiv,
			$matchesDiv,
			$matchesList,
			$matchLi,
			$matchSummary,
			$matchDiv,
			$liveVoteDiv,
			$hsVoteDiv,
			$scVoteDiv,
			$voteContainer;
		
		if(!reload){
			// build prediction leaderboards
			hsLeaderBoard = data.brownlowTracker.superfootyLeaderboard.player;
			$.fn.Brownlow.buildLeaderboards("hs", hsLeaderBoard);
			
			scLeaderBoard = data.brownlowTracker.supercoachLeaderboard.player;
			$.fn.Brownlow.buildLeaderboards("sc", scLeaderBoard);
		}
		
		//build live leaderboard
		if(data.brownlowTracker.liveLeaderboard != ""){
			preCount=0;
			$('.pre-count').hide();
			liveLeaderBoard = data.brownlowTracker.liveLeaderboard.player;
			$.fn.Brownlow.buildLeaderboards("live", liveLeaderBoard);
		}else{
			preCount=1;
			$('.pre-count').show();
		}
		
		// build matches
		rounds = data.brownlowTracker.round;
		
		//clear old data
		$roundInfoDiv = $(".round-info");
		
		$matchesDiv = $(".matches");
			//.empty();
		//$(".match-info").remove();
		
		$.each(rounds, function(i, o){
			var roundNo = o.roundNumber,
				roundClass = "round-"+roundNo,
				matchClass,
				matches = o.match,
				resultString = "";
			
			if(!reload){
				$matchesList = $("<ul/>", {"class":roundClass});			
			}

			var matchNo;
			$.each(matches, function(j, m){
			
				if(i+1 == 12){
					matchNo = (i*9+(j+1))-3;
				}else if(i+1 == 13){
					matchNo = (i*9+(j+1))-6;
				}else if(i+1 >= 14){
					matchNo = (i*9+(j+1))-9;
				}else{
					matchNo = i*9+(j+1);
				}
				
				var gameNo = j+1;
				
				
				
				if(!reload){
				

					var homeShortName = window["team-"+m.homeSquadId].shortname,
						awayShortName = window["team-"+m.awaySquadId].shortname,
						resultString = "";
					
					/*
					$.each(teamsObj, function(){
						
						if(this.squadId == m.homeSquadId){
							homeShortName = this.shortname;
						}
						if(this.squadId == m.awaySquadId){
							awayShortName = this.shortname;
						}
					})
					*/
					
					//build matches nav				
					$matchLi = $("<li/>", {"data-round":roundNo,"data-game":gameNo, "data-match":matchNo})
						.append($("<span/>", {"class":"teams"}).text(homeShortName + " v " + awayShortName))
						.append($("<span/>", {"class":"date"}).text(m.matchDate))
						.append($("<span/>", {"class":"ground"}).text(m.venueCode))
						.append($("<span/>", {"class":"arrow"}).html("&rsaquo;"));
						
					$matchesList.append($matchLi);
					
					// build match info
					matchClass = "match-info "+roundClass+" game-"+gameNo;
					
					$matchDiv = $("<div/>", {"class":matchClass});
					
					if(m.homeSquadScore == m.awaySquadScore){
						resultString = "drew with";
					}else{
						resultString = (parseInt(m.homeSquadScore,10) > parseInt(m.awaySquadScore,10)) ? "def" : "def by";
					}
									
					$matchSummary = $("<div/>", {"class":"match-summary"})
						.append($("<p/>", {"class":"match-title"}).html("<strong>"+m.homeSquadName+"</strong> ("+m.homeSquadGoals+"."+m.homeSquadBehinds+"."+m.homeSquadScore+") "+resultString+" <strong>"+m.awaySquadName+"</strong> ("+m.awaySquadGoals+"."+m.awaySquadBehinds+"."+m.awaySquadScore+")"))
						.append($("<p/>", {"class":"match-copy"}).html($.trim(m.comment)));
						
					$matchDiv.append($matchSummary);
				}else{
					
					$matchDiv = $roundInfoDiv.find("."+roundClass+".game-"+gameNo);
					//console.log($matchDiv);
				}
				
				
				

								
				// build match votes
				
				var liveVote1 = {}, liveVote2 = {}, liveVote3 = {}, 
				liveVoteId1 = m.votes1,
				liveVoteId2 = m.votes2,
				liveVoteId3 = m.votes3,
				lvt1,lvt2,lvt3;
				
				
				liveVote1 = window["player-"+liveVoteId1];
				if($.isEmptyObject(liveVote1)){
					liveVote1 = {};
					liveVote1.displayName = "";
					liveVote1.totalVotes = "";
					liveVote1.livePosition = "";
				}else{
					window["currentVotingMatch"] = matchNo;
					lvt1 = window["team-"+liveVote1.squadId].shortname;
				}
				
				liveVote2 = window["player-"+liveVoteId2];
				if($.isEmptyObject(liveVote2)){
					liveVote2 = {};
					liveVote2.displayName = "";
					liveVote2.totalVotes = "";
					liveVote2.livePosition = "";
				}else{
					lvt2 = window["team-"+liveVote2.squadId].shortname;
				}
				
				liveVote3 = window["player-"+liveVoteId3];
				if($.isEmptyObject(liveVote3)){
					liveVote3 = {};
					liveVote3.displayName = "";
					liveVote3.totalVotes = "";
					liveVote3.livePosition = "";
				}else{
					lvt3 = window["team-"+liveVote3.squadId].shortname;
				}
				
				
				//if first load build all votes else only build live votes
				if(!reload){
					$voteContainer = $("<div/>", {"class":"vote-container"});
					var hsVote1 = {}, hsVote2 = {}, hsVote3 = {}, scVote1 = {}, scVote2 = {}, scVote3 = {},
						hsvt1,hsvt2,hsvt3,scvt1,scvt2,scvt3,				
						
						hsVoteId1 = m.hsPred1,
						hsVoteId2 = m.hsPred2,
						hsVoteId3 = m.hsPred3,
						scVoteId1 = m.scPred1,
						scVoteId2 = m.scPred2,
						scVoteId3 = m.scPred3;
					
					
					
					hsVote1 = window["player-"+hsVoteId1];
					hsvt1 = window["team-"+hsVote1.squadId].shortname;
					
					hsVote2 = window["player-"+hsVoteId2];
					hsvt2 = window["team-"+hsVote2.squadId].shortname;
					
					hsVote3 = window["player-"+hsVoteId3];
					hsvt3 = window["team-"+hsVote3.squadId].shortname;
					
					scVote1 = window["player-"+scVoteId1];
					scvt1 = window["team-"+scVote1.squadId].shortname;
					
					scVote2 = window["player-"+scVoteId2];
					scvt2 = window["team-"+scVote2.squadId].shortname;
					
					scVote3 = window["player-"+scVoteId3];
					scvt3 = window["team-"+scVote3.squadId].shortname;
										
					if(preCount===0){
						$liveVoteDiv = $("<div/>", {"class":"votes live"})
							.append($("<table/>", {"cellpadding":0,"cellspacing":0,"border":0})
								.append($("<tr/>")
									.append($("<td/>",{"class":"title","colspan":2}).text("LIVE VOTES")))
								.append($("<tr/>")
									.append($("<td/>", {"class":"votes"}).html('<span class="vote">3</span>'))
									.append($("<td/>", {"class":"player"})
										.append($("<span/>", {"class":"name "+lvt3})
											.append($("<a/>", {"href":"","class":"playerpop","data-player-id":liveVoteId3}).text(liveVote3.displayName)))
										//.append($("<span/>", {"class":"count"}).text(liveVote3TallyText))
									)
								)
								.append($("<tr/>")
									.append($("<td/>", {"class":"votes"}).html('<span class="vote">2</span>'))
									.append($("<td/>", {"class":"player"})
										.append($("<span/>", {"class":"name "+lvt2})
											.append($("<a/>", {"href":"","class":"playerpop","data-player-id":liveVoteId2}).text(liveVote2.displayName)))
										//.append($("<span/>", {"class":"count"}).text(liveVote2TallyText))
									)
								)
								.append($("<tr/>")
									.append($("<td/>", {"class":"votes"}).html('<span class="vote">1</span>'))
									.append($("<td/>", {"class":"player"})
										.append($("<span/>", {"class":"name "+lvt1})
											.append($("<a/>", {"href":"","class":"playerpop","data-player-id":liveVoteId1}).text(liveVote1.displayName)))
										//.append($("<span/>", {"class":"count"}).text(liveVote1TallyText))
									)
								)
							);
					}else{
						$liveVoteDiv = $("<div/>", {"class":"votes live"})
							.append($("<table/>", {"cellpadding":0,"cellspacing":0,"border":0})
								.append($("<tr/>")
									.append($("<td/>",{"class":"title","colspan":2}).text("LIVE VOTES")))
								.append($("<tr/>")
									.append($("<td/>", {"class":"pre-count"}).html('Live from 8pm,<br/>Monday 24 September'))
								)							
							);
					}
						
					$voteContainer.append($liveVoteDiv);
					
					//heraldsun
	
					$hsVoteDiv = $("<div/>", {"class":"votes hs"})
						.append($("<table/>", {"cellpadding":0,"cellspacing":0,"border":0})
							.append($("<tr/>")
								.append($("<td/>",{"class":"title","colspan":2}).text("SUPERFOOTY VOTES")))
							.append($("<tr/>")
								.append($("<td/>", {"class":"votes"}).html('<span class="vote">3</span>'))
								.append($("<td/>", {"class":"player"})
									.append($("<span/>", {"class":"name "+hsvt3})
										.append($("<a/>", {"href":"","class":"playerpop","data-player-id":hsVoteId3}).text(hsVote3.displayName)))
									//.append($("<span/>", {"class":"count"}).text(hsVote3votes + " votes ("+hsVote3.livePosition+")"))
								)
							)
							.append($("<tr/>")
								.append($("<td/>", {"class":"votes"}).html('<span class="vote">2</span>'))
								.append($("<td/>", {"class":"player"})
									.append($("<span/>", {"class":"name "+hsvt2})
										.append($("<a/>", {"href":"","class":"playerpop","data-player-id":hsVoteId2}).text(hsVote2.displayName)))
									//.append($("<span/>", {"class":"count"}).text(hsVote2votes + " votes ("+hsVote2.livePosition+")"))
								)
							)
							.append($("<tr/>")
								.append($("<td/>", {"class":"votes"}).html('<span class="vote">1</span>'))
								.append($("<td/>", {"class":"player"})
									.append($("<span/>", {"class":"name "+hsvt1})
										.append($("<a/>", {"href":"","class":"playerpop","data-player-id":hsVoteId1}).text(hsVote1.displayName)))
									//.append($("<span/>", {"class":"count"}).text(hsVote1votes + " votes ("+hsVote1.livePosition+")"))
								)
							)
						);
						
					$voteContainer.append($hsVoteDiv);
					
					//supercoach
	
					$scVoteDiv = $("<div/>", {"class":"votes supercoach"})
						.append($("<table/>", {"cellpadding":0,"cellspacing":0,"border":0})
							.append($("<tr/>")
								.append($("<td/>",{"class":"title","colspan":2}).text("SUPERCOACH VOTES")))
							.append($("<tr/>")
								.append($("<td/>", {"class":"votes"}).html('<span class="vote">3</span>'))
								.append($("<td/>", {"class":"player"})
									.append($("<span/>", {"class":"name "+scvt3})
										.append($("<a/>", {"href":"","class":"playerpop","data-player-id":scVoteId3}).text(scVote3.displayName)))
									//.append($("<span/>", {"class":"count"}).text(scVote3votes + " votes ("+scVote3.livePosition+")"))
								)
							)
							.append($("<tr/>")
								.append($("<td/>", {"class":"votes"}).html('<span class="vote">2</span>'))
								.append($("<td/>", {"class":"player"})
									.append($("<span/>", {"class":"name "+scvt2})
										.append($("<a/>", {"href":"","class":"playerpop","data-player-id":scVoteId2}).text(scVote2.displayName)))
									//.append($("<span/>", {"class":"count"}).text(scVote2votes + " votes ("+scVote2.livePosition+")"))
								)
							)
							.append($("<tr/>")
								.append($("<td/>", {"class":"votes"}).html('<span class="vote">1</span>'))
								.append($("<td/>", {"class":"player"})
									.append($("<span/>", {"class":"name "+scvt1})
										.append($("<a/>", {"href":"","class":"playerpop","data-player-id":scVoteId1}).text(scVote1.displayName)))
									//.append($("<span/>", {"class":"count"}).text(scVote1votes + " votes ("+scVote1.livePosition+")"))
								)
							)
						);
						
					$voteContainer.append($scVoteDiv);
					
					$matchDiv.append($voteContainer);
				
				}else{
				
					$voteContainer = $matchDiv.find(".vote-container");
					
					//console.log($matchDiv);
					
					$voteContainer.find(".live").remove();
					//console.log(liveVote1);
					if(preCount===0){
						$liveVoteDiv = $("<div/>", {"class":"votes live"})
							.append($("<table/>", {"cellpadding":0,"cellspacing":0,"border":0})
								.append($("<tr/>")
									.append($("<td/>",{"class":"title","colspan":2}).text("LIVE VOTES")))
								.append($("<tr/>")
									.append($("<td/>", {"class":"votes"}).html('<span class="vote">3</span>'))
									.append($("<td/>", {"class":"player"})
										.append($("<span/>", {"class":"name "+lvt3})
											.append($("<a/>", {"href":"","class":"playerpop","data-player-id":liveVoteId3}).text(liveVote3.displayName)))
										//.append($("<span/>", {"class":"count"}).text(liveVote3TallyText))
									)
								)
								.append($("<tr/>")
									.append($("<td/>", {"class":"votes"}).html('<span class="vote">2</span>'))
									.append($("<td/>", {"class":"player"})
										.append($("<span/>", {"class":"name "+lvt2})
											.append($("<a/>", {"href":"","class":"playerpop","data-player-id":liveVoteId2}).text(liveVote2.displayName)))
										//.append($("<span/>", {"class":"count"}).text(liveVote2TallyText))
									)
								)
								.append($("<tr/>")
									.append($("<td/>", {"class":"votes"}).html('<span class="vote">1</span>'))
									.append($("<td/>", {"class":"player"})
										.append($("<span/>", {"class":"name "+lvt1})
											.append($("<a/>", {"href":"","class":"playerpop","data-player-id":liveVoteId1}).text(liveVote1.displayName)))
										//.append($("<span/>", {"class":"count"}).text(liveVote1TallyText))
									)
								)
							);
					}else{
						$liveVoteDiv = $("<div/>", {"class":"votes live"})
							.append($("<table/>", {"cellpadding":0,"cellspacing":0,"border":0})
								.append($("<tr/>")
									.append($("<td/>",{"class":"title","colspan":2}).text("LIVE VOTES")))
								.append($("<tr/>")
									.append($("<td/>", {"class":"pre-count"}).html('Live from 8pm,<br/>Monday 24 September'))
								)							
							);
					}
						
					$voteContainer.prepend($liveVoteDiv);
					
					
					
				}
				
				
				
							
				$roundInfoDiv.append($matchDiv);
				
			});
			
			$matchesDiv.prepend($matchesList);
		});
		
		//set currentround
		window["currentRound"] = data.brownlowTracker.countRoundNumber;
		//var	currentRoundLi;
			
		window["currentMatch"] = data.brownlowTracker.matchesCounted;
		
		if(window["currentVotingMatch"] > window["currentMatch"]){
			window["currentMatch"] = window["currentVotingMatch"];
		}
			
		//console.log('processMatch - window:'+window["selectedMatch"]);
		//console.log('processMatch - current:'+currentMatch);
		
		if(window["currentMatch"]===0 && window["selectedMatch"]===1){window["currentMatch"]=1;}
		else if(window["currentMatch"] > 0){var cm1 = window["currentMatch"]; window["currentMatch"] = cm1; }
		else{window["currentMatch"]=window["selectedMatch"];}
		
		//console.log('processMatch:'+currentMatch);

		if(window["currentRound"] >= 1){
			$(".round-select li").removeClass("live").find("span.live").text("");
			$(".round-select li").eq(window["currentRound"]).addClass("live").find("span.live").text("LIVE");
		}
		if(window["currentRound"] === 0 && !reload){
			$(".round-select a").eq(1).trigger("click");
		}else if(window["currentRound"] === 0 && reload){
			$(".round-select a").eq(window["selectedRound"]).trigger("click");
		}
		else{
			$(".round-select a").eq(window["currentRound"]).trigger("click");
		}
		
		
	};
		 
		 
		 
	$.fn.Brownlow.defaults = {
		readyClass: 'js-ready',
		popupClass: "playerpop",
		popupActive: false,
		jsonBase: 'data/',
		matchJsonURL: "tracker-2012.json",
		playerJsonURL: "playerInfo-2012.json",
		teamJsonURL: "teams.json"
	};

}(jQuery));



// initialise
(function ($) {
	"use strict";
	$(document).ready(function() {
	
		$(".bt-container").Brownlow();
	
	});
}(jQuery));