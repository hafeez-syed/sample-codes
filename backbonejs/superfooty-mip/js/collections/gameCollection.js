/* =========================================
   MIP Collection
   ========================================== 
*/

MIPCollections 		= Backbone.Collection.extend({
	model: MIPModel,
	url : new GSModel().get('restApiUrl')
});
