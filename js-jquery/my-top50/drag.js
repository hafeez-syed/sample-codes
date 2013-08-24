/**
 *
 * @author: 			Hafeez Syed - hafeez.syed@news.com.au
 * @type: 				javascript/jquery
 * @project:			Mike's Top 50
 * @description:		Styles for Mike's Top 50 - Index Page
 *
 */
/**
 *	REFER TO http://jquery.com/
 *
 */
/* 
// 
Dont forget to include 'dollar sign' sign
before the '(document)'
// 
*/
$(document).ready(function() {	
	var positionLI = function(){
		
		var zIndexNumber = 1000;
		$('#sortable li').each(function() {
			$(this).css('zIndex', zIndexNumber);
			zIndexNumber -= 10;
		});
		
		$('#sortable li').each(function(index){
				if(index <= 19){
					var top = 0;
					var topAdj = index*29;
					if(index>0){
						top += topAdj;
					}
					$(this).css({'position':'absolute','top':top,'left':'0px'});
				}

				if(index > 19 && index <= 39){
					var top = 0;
					var topAdj = (index-20)*29;
					if(index>20){
						top += topAdj;
					}
					$(this).css({'position':'absolute','top':top,'left':'215px'});
				}

				if(index > 39){
					var top = 0;
					var topAdj = (index-40)*29;
					if(index>20){
						top += topAdj;
					}
					$(this).css({'position':'absolute','top':top,'left':'430px'});
				}
		});
	};
	
	$( "#sortable" ).sortable({
		appendTo: "body",
		update: function(){
			positionLI();
			$("#sortable").find('li .playername').each(function(index){
				var classname = 'playername number-' + index;
				$(this).removeClass().addClass(classname);
				var fieldname 		= 'pname'+index;
				var playername 		= $.trim($(this).text());
				document.forms['mikesform'][fieldname].value = playername;
				//console.log('playername = '+document.forms['mikesform'][fieldname].value + ' & index = '+index);
			});
			//
			//
			$("#sortable").find('li .playerid').each(function(index){
				var fieldnameId 		= 'pid'+index;
				var fieldnamePos		= 'pos'+index;
				var playerid 			= $.trim($(this).text());
				document.forms['mikesform'][fieldnameId].value = playerid;
				document.forms['mikesform'][fieldnamePos].value = index;
				//console.log('playerid = '+document.forms['mikesform'][fieldnameId].value + ' & index = '+index);
		
			});
		}
	});
	
	$( "#sortable" ).disableSelection();
	positionLI();
	$('.reset').click(function() {
		location.reload();
	});
});