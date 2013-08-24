/*
	Player Details View
*/

PlayerDetailsView 			= Backbone.View.extend({
	el: '#player-details',

	template : htmlTemplate('playerdetails-template'),

	initialize: function() {
		var thisPlayerID=0;
		var newID=0;
		this.firstTime=true;
	},
	
	render: function(coll) {
		coll.each(this.listData, this);
		this.firstTime = false;
		return this;
	},

	showPlayerDetailsPage: function(qstring) {
		//$('#player-details').empty();

		thisPlayerID = qstring;

		//playerCollections.url = new GSModel().get('restApiOriginalUrl')+thisPlayerID;

		var me 		= this;

		playerCollections.fetch({
			success : function(collection) {
				me.render(collection);
			}
		});
	},

	listData: function(collection) {
		var playerData = new PlayerDataView({model: collection});
		//if(this.firstTime) this.$el.hide();
		//this.$el.hide();
		this.$el.html(playerData.render().el);
		//if(this.firstTime) this.$el.fadeIn("slow");
		//this.$el.fadeIn("slow");
		return false;
	}

});

PlayerDataView 					= Backbone.View.extend({

	template 				: htmlTemplate('playerdetails-template'),

	initialize: function() {
    	this.model.on('change', this.render, this);
	},

	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		'click .arrow-right'		: 'nextProfile',
		'click .arrow-left'			: 'prevProfile',
		'click .close-details'		: 'closeDetails'
	},

	nextProfile: function() {
		//console.log('next clicked '+playerID);
		$.each(playerID, function(ind, val) {
			if(thisPlayerID == playerID[ind]) {
				if(ind == playerID.length-1) {
					newID = playerID[0];
				}else{
					newID = playerID[ind+1];
				}

				playerRouters.navigate('playerdetails/'+newID, {trigger: true});
				return false;
			}
		});
	},

	prevProfile: function() {
		//console.log('prev clicked '+playerID);
		$.each(playerID, function(ind, val) {
			if(thisPlayerID == playerID[ind]) {
				if(ind == 0) {
					newID = playerID[playerID.length-1];
				}else{
					newID = playerID[ind-1];
				}

				playerRouters.navigate('playerdetails/'+newID, {trigger: true});
				return false;
			}
		});
	},

	closeDetails : function (e) {
		playerCollections.url = new GSModel().get('restApiOriginalUrl');
		playerRouters.navigate('', {trigger: true});
	}

});