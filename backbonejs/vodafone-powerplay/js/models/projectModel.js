/*
	Model
*/
	
Portfolio.projectModel 				= Backbone.Model.extend({
	defaults: {
		id: '0',
		type: 'Project Type',
		details: 'Project Description',
		cssName: 'front-end'
	}
});