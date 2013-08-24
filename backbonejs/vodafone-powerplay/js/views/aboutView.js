/*
	About View
*/

Portfolio.aboutView 				= Backbone.View.extend({
	el: '#viewLink',

	template : htmlTemplate('about-template'),

	showAboutPage: function() {
		resetMenus();
		this.$el.hide();
		$("nav ul").find("a[href='#about']").addClass("current");
		this.$el.html(this.template());
		this.$el.fadeIn("slow");
	}
});