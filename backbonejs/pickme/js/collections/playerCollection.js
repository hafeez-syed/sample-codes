/* =========================================
   Player Collection
   ========================================== 
*/

PlayerCollections 		= Backbone.Collection.extend({
	model: PlayerModel,
	
	url : new GSModel().get('restApiUrl')
});
