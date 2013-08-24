/*
	Powerplay View
*/

PlayerDetailsView 								= Backbone.View.extend({
	el: '#details',

	template : htmlTemplate('playerdetails-template'),
	
	render: function(coll) {
		coll.each(this.listData, this);
		return this;
	},

	showPlayerDetailsPage: function(qstring) {
		$('#wrapper').empty();

		gameCollections.url = gameCollections.url+qstring;

		var me 		= this;

		gameCollections.fetch({
			success : function(collection) {
				me.render(collection);
			}
		});
	},

	listData: function(collection) {
		var gameData = new GameDataView({model: collection});
		this.$el.hide();
		this.$el.append(gameData.render().el);
		this.$el.fadeIn("slow");
		return false;
	}

});

GameDataView 					= Backbone.View.extend({
	template 				: htmlTemplate('playerdetails-template'),

	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		'click .voting-button'		: 'voteevent',
		'click .back-button'		: 'goback',
		'mouseover .voting-button' 	: 'fadeIn',
		'mouseout .voting-button' 	: 'fadeOut',
		'mouseover .back-button' 	: 'fadeIn',
		'mouseout .back-button' 	: 'fadeOut'
	},

	goback: function () {
		gameCollections.url = new GSModel().get('restApiOriginalUrl')
	},

	fadeIn: function(e) {
		$(e.currentTarget).css({'opacity': '0.7'});
		$(e.currentTarget).addClass('animated fadeOut');
	},

	fadeOut: function(e) {
		$(e.currentTarget).css({'opacity': '1'});
		$(e.currentTarget).removeClass('animated fadeOut');
	},

	voteevent : function () {
		
		var eId 	= this.model.get('match_details')[0].event_id;
		var eVotes 	= parseInt(this.model.get('match_details')[0].event_votes) + 1;


		var gm 		= new GameModel({
			"match_id": 	this.model.get('match_id'),
			"match_number": this.model.get('match_number'),
			'match_details' : {
					"event_id"		: eId,
					"voted"			: "yes",
					"event_votes"	: eVotes
			}
		});


		gm.save();

		return false;	
	}

});