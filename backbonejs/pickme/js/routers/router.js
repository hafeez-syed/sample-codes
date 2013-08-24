/* =========================================
   Player Router
   ========================================== 
*/
PlayerRouters 	= Backbone.Router.extend({
	routes: {
		'' 						: 	'showPlayers',
		'#'						: 	'showPlayers',
		'playerdetails/:id'		: 	'showPlayerDetails'
	},

	showPlayers 					: function() {
		playerCollections.url = new GSModel().get('restApiOriginalUrl');
		playerView.showPlayersPage();
	},

	showPlayerDetails 			: function(id) {
		playerCollections.url = new GSModel().get('restApiOriginalUrl')+id;
		playerDetailsView.showPlayerDetailsPage(id);
	}
});


var playerModel				= new PlayerModel();
var playerCollections		= new PlayerCollections();
var playerView				= new PlayerView();
var playerDetailsView		= new PlayerDetailsView();
var playerRouters			= new PlayerRouters();
Backbone.history.start();