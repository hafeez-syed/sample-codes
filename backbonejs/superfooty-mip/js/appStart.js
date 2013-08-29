/* =========================================
   Template
   ========================================== 
*/
htmlTemplate = function($tempid) {
	return _.template($('#'+$tempid).html());
}