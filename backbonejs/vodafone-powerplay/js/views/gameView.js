/* =========================================
   Game View
   ========================================== 
*/

GameView 								= Backbone.View.extend({
	el: '#wrapper',

	template : htmlTemplate('main-template'),

	initialize: function() {
	},

	/* =========================================
	   Step 2 :

	    - Fetch each team data from a Collection  

	   ========================================== 
	*/
	render: function(coll) {
		coll.each(this.listGames, this);
		return this;
	},

	/* =========================================
	   Step 3:

	   	- Append player data in the DOM element
	   ========================================== 
	*/
	listGames: function(collection) {
		var singleGame = new SingleGameView({model: collection});
		this.$el.hide();
		this.$el.append(singleGame.render().el);
		this.$el.fadeIn("slow");
		return false;
	},

	/* =========================================
	   Step 1:

	   	- Called from Router 
	   ========================================== 
	*/
	showGamePage: function(qstring) {
		$('#details').empty();
		var me 		= this;

		/* =========================================
		   Fetch specific TEAM data and parse it for
		   rendering
		   ========================================== 
		*/		
		gameCollections.fetch({
			data: qstring,
			success : function(collection) {
				me.render(collection);
			}
		});
	}
});

/* =========================================
   Single Game View
   ========================================== 
*/

SingleGameView 					= Backbone.View.extend({
	template 					: htmlTemplate('main-template'),



	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		'click .play-button' 		: 'openDetails',
		'mouseover .play-button' 	: 'fadeIn',
		'mouseout .play-button' 	: 'fadeOut'
	},

	openDetails: function(e) {
		var id = $(e.currentTarget).attr("id");
		GameRouters.navigate('playerdetails/'+id, {trigger: true});
	},

	fadeIn: function(e) {
		$(e.currentTarget).css({'opacity': '0.7'});
		$(e.currentTarget).parent().find('.thumb').addClass('animated fadeOut');
	},

	fadeOut: function(e) {
		$(e.currentTarget).css({'opacity': '1'});
		$(e.currentTarget).parent().find('.thumb').removeClass('animated fadeOut');
	}

});