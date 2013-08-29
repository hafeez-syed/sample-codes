/* =========================================
   Game Model
   ========================================== 
*/
	
GameModel 				= Backbone.Model.extend({
	//Validate the Game Model
	validate: function(attr) {
		if( !(attr.match_details && attr.match_id && attr.match_number) ) {
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
	//*/
	sync: function (method, model, options) {
	 	if (method === 'create' || method === 'update') {
	 		$.ajax({
	 			dataType: 'JSON',
	 			type: 'PUT',
	 			url:  new GSModel().get('restApiUrl')+this.get('match_details').event_id,
	 			data: {
	 					event_id: this.get('match_details').event_id,
	 					event_votes: parseInt(this.get('match_details').event_votes)
			 	},
	 			success: function (data) {
	 				$('.voted').text('VOTED');
	 				$('.voting-button').click(false);
	 				$('.voting-button').fadeTo('slow', 0.5);
					$('.voting-button').on('mouseover', function() { return false; });
					$('.voting-button').on('mouseout', function() { return false; });
	 			}, // success

	 			error: function(model, response) {
				     console.log(response);
	 			} 	 		
	 		}); // ajax call
	 	}// if
 	}
});