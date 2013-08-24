/*
	MIP Model
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
		 
		//console.log('Inside initialize');
	},
	//*/
	sync: function (method, model, options) {
		
		var ind = this.get('ind');
		var tid = this.get('team_id');
		var pid = this.get('team_players')[ind].player_id;
		var pvo = parseInt(this.get('team_players')[ind].player_votes);

	 	if (method === 'create' || method === 'update') {
	 		$.ajax({
	 			dataType: 'JSON',
	 			type: 'PUT',
	 			url:  new GSModel().get('restApiUrl')+pid,
	 			data: {
	 					team_id: 		tid,
	 					player_id: 		pid,
	 					player_votes: 	pvo
			 	},
	 			success: function (data) {
	 				//console.log(data);
	 				$('.players-hover-bg').show();
					$('.players-popularity').show();

	 				//console.log(data);
	 				//$('.voted').text('VOTED');
	 				//$('.voting-button').click(false);
	 				//$('.voting-button').fadeTo('slow', 0.5);
					//$('.voting-button').on('mouseover', function() { return false; });
					//$('.voting-button').on('mouseout', function() { return false; });
	 			}, // success

	 			error: function(model, response) {
	 				console.log('Error Data :: '+response)
	 			} 	 		
	 		}); // ajax call
	 	}// if
 	}
});
