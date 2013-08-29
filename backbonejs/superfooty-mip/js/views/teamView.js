/* =========================================
   Team View
   ========================================== 
*/

TeamView 								= Backbone.View.extend({
	el: '#thumbnails',

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
		mipCollections.fetch({
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
		'click .thumb' 		: 'openDetails',
		'mouseover .thumb' 	: 'overEffect',
		'mouseout .thumb' 	: 'outEffect'
	},

	openDetails: function(e) {
		var id = $(e.currentTarget).attr("id");
		mipRouters.navigate('teamdetails/'+id, {trigger: true});
	},

	overEffect: function(e) {
		$(e.currentTarget).find('.hovertip').removeClass('animated lightSpeedOut');
		$(e.currentTarget).find('.hovertip').addClass('animated lightSpeedIn');
	},

	outEffect: function(e) {
		$(e.currentTarget).find('.hovertip').removeClass('animated lightSpeedIn');
		$(e.currentTarget).find('.hovertip').addClass('animated lightSpeedOut');
	},
});