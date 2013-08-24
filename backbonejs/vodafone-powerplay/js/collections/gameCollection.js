/*
	Game Collection
*/

GameCollections 		= Backbone.Collection.extend({
	model: GameModel,
	
	url : new GSModel().get('restApiUrl')
});
