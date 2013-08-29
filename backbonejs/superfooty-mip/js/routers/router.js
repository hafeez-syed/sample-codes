/* =========================================
   MIP Routers
   ========================================== 
*/

MIPRouters 	= Backbone.Router.extend({
	routes: {
		'' 						: 	'showMIP',
		'teamdetails/:id'		: 	'showTeamDetails'
	},

	showMIP 					: function() {
		teamView.showGamePage();
	},

	showTeamDetails 			: function(id) {
		teamDetailsView.showTeamDetailsPage(id);
	}
});

/* =========================================
   Initializing Model, Views, Collections
   and Router
   ========================================== 
*/

var mipModel				= new MIPModel();
var mipCollections			= new MIPCollections();
var teamView				= new TeamView();
var teamDetailsView			= new TeamDetailsView();
var mipRouters				= new MIPRouters();
Backbone.history.start();