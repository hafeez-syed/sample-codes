/*
	MIP Routers
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
		//iconsView.showIcons();
		//iconsView.render();
	}
});


var mipModel				= new MIPModel();
var mipCollections			= new MIPCollections();
var teamView				= new TeamView();
var teamDetailsView			= new TeamDetailsView();
//var iconsView 				= new IconsView({model: mipCollections, el: $('#footer')});
//var iconsView 				= new IconsView({model: mipCollections, el: $('#footer')});
var mipRouters				= new MIPRouters();
Backbone.history.start();