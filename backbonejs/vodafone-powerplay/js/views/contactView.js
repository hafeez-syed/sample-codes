/*
	Contact View
*/

Portfolio.contactView 				= Backbone.View.extend({
	el: '#viewLink',

	template : htmlTemplate('contact-template'),

	showContactPage: function() {
		resetMenus();
		this.$el.hide();
		$("nav ul").find("a[href='#contact']").addClass("current");
		this.$el.html(this.template());
		this.$el.fadeIn("slow");
	}
});