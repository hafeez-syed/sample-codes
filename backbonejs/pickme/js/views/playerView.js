/* =========================================
   Player View
   ========================================== 
*/

PlayerView 								= Backbone.View.extend({
	el: '#list',

	template : htmlTemplate('pickme-template'),

	initialize: function() {
		this.firstTime=true;
		var playerID;
	},

	render: function(coll) {
		playerID = [];
		coll.each(this.listPlayers, this);
		this.firstTime=false;
		return this;
	},

	listPlayers: function(collection) {
		var singlePlayer = new SinglePlayerView({model: collection});
		this.$el.hide();
		this.$el.append(singlePlayer.render().el);
		this.$el.fadeIn("slow");
		return false;
	},

	showPlayersPage: function() {
		$('#player-details').empty();
		$('#list').empty();
		var me 		= this;
		playerCollections.fetch({
			success : function(collection) {
				me.render(collection);
			}
		});
	}
});


SinglePlayerView 					= Backbone.View.extend({
	tagName: 'li',

	template 					: htmlTemplate('pickme-template'),


	render : function () {
		playerID.push(this.model.attributes.player_id);
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		'click img' 		: 'openDetails',
		'mouseover img' 	: 'overEffect',
		'mouseout img' 		: 'outEffect'
	},

	openDetails: function(e) {
		var id = $(e.currentTarget).parent().attr("id");
		playerRouters.navigate('playerdetails/'+id, {trigger: true});
	},

	overEffect: function(e) {
		var parent = $(e.currentTarget).parent();
		parent.children(".hover-bar").css({'display':'block'});
		parent.children(".play-button").css({'display':'block'});
		parent.children(".player-name").css({'display':'block'});
	},

	outEffect: function(e) {
		var parent = $(e.currentTarget).parent();
		parent.children(".hover-bar").css({'display':'none'});
		parent.children(".play-button").css({'display':'none'});
		parent.children(".player-name").css({'display':'none'});
	}
});