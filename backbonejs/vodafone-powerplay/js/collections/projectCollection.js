/*
	Collection
*/

Portfolio.projectCollections 		= Backbone.Collection.extend({
	model: Portfolio.projectModel,
	//url: 'http://localhost:8080/restler/apps/_syed-hafeez/projects'
	url: 'http://api.syed-hafeez.com/restler/apps/_syed-hafeez/projects'
});