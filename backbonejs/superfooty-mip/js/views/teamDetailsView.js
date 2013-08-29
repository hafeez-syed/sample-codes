/* =========================================
   Team Details View
   ========================================== 
*/

TeamDetailsView 			= Backbone.View.extend({
	el: '#details',

	template : htmlTemplate('teamdetails-template'),
	
	/* =========================================
	   Step 2 :

	    - Show all team Icons in the footer
	    - Fetch each player data from a Collection  

	   ========================================== 
	*/
	render: function(coll) {
		var iconsView = new IconsView({model: mipCollections, el: $('#footer')});
		iconsView.showIcons();
		coll.each(this.listData, this);
		return this;
	},

	/* =========================================
	   Step 1:

	   	- Called from Router 
	   ========================================== 
	*/
	showTeamDetailsPage: function(qstring) {
		$('#wrapper').empty();

		/* =========================================
		   Changing the RESTAPI URL to fetch
		   a specific TEAM data and parse it for
		   rendering
		   ========================================== 
		*/
		mipCollections.url = new GSModel().get('restApiOriginalUrl')+qstring;

		var me 		= this;

		mipCollections.fetch({
			success : function(collection) {
				me.render(collection);
			}
		});
	},

	/* =========================================
	   Step 3:

	   	- Append player data in the DOM element
	   ========================================== 
	*/
	listData: function(collection) {
		var playerData = new PlayerDataView({model: collection});
		this.$el.hide();
		this.$el.append(playerData.render().el);
		this.$el.fadeIn("slow");
		return false;
	}

});

/* =========================================
   Single Player View
   ========================================== 
*/

PlayerDataView 					= Backbone.View.extend({
	template 				: htmlTemplate('teamdetails-template'),

	initialize: function() {
    	this.model.on('change', this.render, this);
	},

	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		'click .voting-button'		: 'voteevent',
		'mouseover .voting-button' 	: 'fadeIn',
		'mouseout .voting-button' 	: 'fadeOut',
		'mouseover .back-button' 	: 'fadeIn',
		'mouseout .back-button' 	: 'fadeOut'
	},

	
	fadeIn: function(e) {
		$(e.currentTarget).css({'opacity': '0.7'});
		$(e.currentTarget).addClass('animated fadeOut');
	},

	fadeOut: function(e) {
		$(e.currentTarget).css({'opacity': '1'});
		$(e.currentTarget).removeClass('animated fadeOut');
	},

	showDescription: function(e) {
		console.log($(e.currentTarget).parent().find($('.player-hover-container')).css('display','none'));
		var con = $(e.currentTarget).parent().find($('.player-hover-container'));
		con.find('.players-hover-bg').show();	
	},

	hideDescription: function(e) {
		var con = $(e.currentTarget).parent().find($('.player-hover-container'));
		con.find('.players-hover-bg').hide();
	},


	fancyRollover : function(e) {
		console.log(e);
	},

	voteevent : function (e) {
		
		var playerClickedIndex 	= $(e.currentTarget).attr("id");

		var modelArray = [];

		for(var i=0; i<=this.model.toJSON().team_players.length-1; i++)
		{
			eId 		= this.model.get('team_players')[i].player_id;
			
			if(i == playerClickedIndex)
			{
				eVo 	= parseInt(this.model.get('team_players')[i].player_votes) + 1;
				test    = 'yes';
			}else{			
				eVo 	= parseInt(this.model.get('team_players')[i].player_votes);
				test    = 'no';
			}
			
			eFn 	= this.model.get('team_players')[i].player_firstname;
			eLn 	= this.model.get('team_players')[i].player_lastname;
			eDs 	= this.model.get('team_players')[i].player_description;
			eLi 	= this.model.get('team_players')[i].player_largeImage;
			ePp 	= this.model.get('team_players')[i].player_popularity;

			modelArray[i] = {
				'player_id'			: eId,
				'player_firstname'	: eFn,
				'player_lastname'	: eLn,
				'player_votes' 		: eVo,
				'player_description': eDs,
				'player_largeImage'	: eLi,
				'player_popularity'	: ePp				
			}
		}

		var myUpdatedModel = {
			'team_id': 			this.model.get('team_id'),
			'team_club': 		this.model.get('team_club'),
			'team_slug': 		this.model.get('team_slug'),
			'team_icon': 		this.model.get('team_icon'),
			'team_thumbnails': 	this.model.get('team_thumbnails'),
			'ind':              playerClickedIndex, 		
			'team_players' : 	modelArray
		}

		newJSONModel = JSON.parse(JSON.stringify(myUpdatedModel));
	
		var mm = this.model.set(newJSONModel);		
		mm.save();

		var con 		= $(e.currentTarget).parent();
		var hoverBg 	= $(con.find('.player-hover-container > .players-hover-bg'));
		var percentage 	= $(con.find('.player-hover-container > .players-popularity'));

		console.log(this.model.attributes);
		return false;
	}
});