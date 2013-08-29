/* =========================================
   MIP Model
   ========================================== 
*/
	
MIPModel 				= Backbone.Model.extend({
	//Validate the MIP Model
	validate: function(attr) {
		if( !(attr.team_id && attr.team_club && attr.team_players) ) {
		return "Error Occurred";
		}
	},
	 
	//Initialize is called after the Model object is constructed
	initialize: function() {
	 
		//if there's an validation error invoke this function
		this.bind("error", function (model, error) {
			console.log(error);
		});
	},

	sync: function (method, model, options) {
		
		// get team and player data and parse it to the RESTAPI to update votes 
		var ind = this.get('ind');
		var tid = this.get('team_id');
		var pid = this.get('team_players')[ind].player_id;
		var pvo = parseInt(this.get('team_players')[ind].player_votes);

	 	if (method === 'create' || method === 'update') {
	 		$.ajax({
	 			dataType: 'JSON',
	 			type: 'PUT',
	 			url:  new GSModel().get('restApiUrl')+tid,
	 			data: {
	 					team_id: 		tid,
	 					player_id: 		pid,
	 					player_votes: 	pvo
			 	},
	 			success: function (data) {
	 				$('.players-hover-bg').show();
					$('.players-popularity').show();
	 			}, // success

	 			error: function(model, response) {
	 				console.log('Error Data :: '+response)
	 			} 	 		
	 		}); // ajax call
	 	}// if
 	}
});