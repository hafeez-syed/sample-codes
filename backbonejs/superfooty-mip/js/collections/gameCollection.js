/*
	MIP Collection
*/

MIPCollections 		= Backbone.Collection.extend({
	model: MIPModel,
	
	// Save all of the todo items under the `"todos-backbone"` namespace.
    //localStorage: new Backbone.LocalStorage("todos-backbone"),

	url : new GSModel().get('restApiUrl')
});
