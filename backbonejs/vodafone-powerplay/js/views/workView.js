/*
	Work View
*/

Portfolio.workView 					= Backbone.View.extend({
	el: '#viewLink',

	template : htmlTemplate('work-template'),

	render: function(coll) {
		coll.each(this.listProjects, this);
		return this;
	},

	listProjects: function(collection) {
		var singleProject = new Portfolio.singleProjectView({model: collection});
		this.$el.hide();
		this.$el.append(singleProject.render().el);
		this.$el.fadeIn("slow");
		return false;
	},

	showWorkPage: function(qstring) {
		$('#viewLink').empty();
		resetMenus();
		$("nav ul").find("a[href='#work']").addClass("current");
		var me 		= this;
		Portfolio.projectCollections.fetch({
			data: qstring,
			success : function(collection) {
				me.render(collection);
			}
		});
	}
});

Portfolio.singleProjectView 		= Backbone.View.extend({
	template 			: htmlTemplate('work-template'),

	render : function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});