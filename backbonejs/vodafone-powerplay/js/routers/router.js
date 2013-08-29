/* =========================================
   Game Routers
   ========================================== 
*/

GameRouters 	= Backbone.Router.extend({
	routes: {
		'' 						: 	'showPowerplay',
		'allplayers'			: 	'showPowerplay',
		'playerdetails/:id'		: 	'showPlayerDetails'
	},

	showPowerplay 				: function() {
		GameView.showGamePage();
	},

	showPlayerDetails 			: function(id) {
		PlayerDetailsView.showPlayerDetailsPage(id);
	}
});

/* =========================================
   Initializing Model, Views, Collections
   and Router
   ========================================== 
*/

var gameModel				= new GameModel();
var gameCollections			= new GameCollections();
var GameView				= new GameView();
var PlayerDetailsView		= new PlayerDetailsView();
var GameRouters				= new GameRouters();
Backbone.history.start();