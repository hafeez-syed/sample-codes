/*
	Team View
*/

IconsView 								= Backbone.View.extend({

	initialize: function() {
		var collLen = 0;
	},

	/* =========================================
	   Step 2
	   ========================================== 
	*/
	render: function(coll) {
		this.collLen = coll.length;
		$('#footer').empty();
		coll.each(this.listIcons, this);
		return this;
	},

	/* =========================================
	   Step 3
	   ========================================== 
	*/
	listIcons: function(collection) {
		$('#footer').append("<div class='thumbnails' id='"+collection.attributes.team_id+"'><img src='"+collection.attributes.team_thumbnails+"' alt='"+collection.attributes.team_club+"'></div>");
		//
		// click, mouseover and mouseout events on each thumbnail
		// add mouse pointer property on each thumbnail as well
		//
		if($('#footer .thumbnails').length == this.collLen) {
			$('#footer .thumbnails').each(function(){
				$(this)
				.css('cursor','pointer')
				.click(function() {
					var id = $(this).attr("id");
					mipRouters.navigate('teamdetails/'+id, {trigger: true});
				})
				.mouseover(function() {
					$(this).addClass('animated fadeOut');
				})
				.mouseout(function() {
					$(this).removeClass('animated fadeOut');
				})
			});
		}
		return false;
	},

	/* =========================================
	   Step 1
	   ========================================== 
	*/
	showIcons: function(qstring) {
		mipCollections.url = new GSModel().get('restApiOriginalUrl');

		var me 		= this;
		mipCollections.fetch({
			data: qstring,
			success : function(collection) {
				me.render(collection);
			}
		});
	}
});