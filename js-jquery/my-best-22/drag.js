/**
 *
 * @author: 			Hafeez Syed - hafeez.syed@news.com.au
 * @type: 				javascript/jquery
 * @project:			My Best 22
 * @description:		Styles for My Best 22 - Index Page
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
*/$(document).ready(function(){
	$(function() {
		var isMouseDown = false;
		//
		//
		$(".draggable").mouseover(function(){
			$(this).css({'color' :  '#6c6c6c'});
		});
		//
		//
		$(".draggable").bind("mouseout", function(){
			$(this).css({'color' : '#000000'});
		});
		//
		//
		$(".draggable").draggable({
            revert:"invalid",
            scroll: false,
            containment:'window',
            helper:'clone'
        });
		//
		//
		$(".droppable").droppable({
			greedy: true,
			drop: function( event, ui ) {
				$(this).addClass("dropped")
					var boxid 		= $(this).attr('id').substring(3);
					var fieldname	= 'field'+boxid;
					var pidname		= 'pid'+boxid;
					var jerseyname	= 'jrsnum'+boxid;
					document.forms['playerform2'][fieldname].value = $.trim($(ui.draggable).find('.playername').text());
					document.forms['playerform2'][pidname].value = $.trim($(ui.draggable).find('.playerid').text());
					document.forms['playerform2'][jerseyname].value = $.trim($(ui.draggable).find('.jserseynumbers').text());
					//document.forms['playerform2'].sessionfield.value = passSessionValue();
					
					//
					//
					var playername = $(ui.draggable).find('.playername').text();
					var firstname, lastname
					var firstname = playername.substring(0,playername.indexOf(' '));
					var lastname = playername.substring(playername.indexOf(' ')+1);
					var playername = firstname + '<br/>' + lastname;
					
					if($(this).find('.leftPosition') != null){
						$(this).find('.rightPlayer').html(playername);
						$(this).find('.playerid').html($(ui.draggable).find('.playerid').text());
					}
					//
					//
					if($(this).find('.rightPosition') != null){
						$(this).find('.leftPlayer').html(playername);
						$(this).find('.playerid').html($(ui.draggable).find('.playerid').text());
					}
					//
					//
               $(this).droppable("destroy");
                setTimeout(function() { ui.draggable.remove(); }, 1);
			}
		});
		//
		//
		$(".submit").bind("mouseover", function(){
			$(this).css({cursor: 'pointer'});
		});
		//
		//
		$(".reset").bind("mouseover", function(){
			$(this).css({cursor: 'pointer'});
		});
		//
		//
		$('.reset').click(function() {
			location.reload();
		});
	});

	function passvalues(){
		var passvalues = '';
		var finddiv = '';
		var setcount = 0;
		var divvalue = '';
		for(i=1; i<=22; i++ ){
			if($('#box'+i).find('.rightPlayer').text() != ''){
				finddiv = '.rightPlayer';
			}else if($('#box'+i).find('.leftPlayer').text() != ''){
				finddiv = '.leftPlayer';
			}
			if($('#box'+i).find(finddiv).text() != ''){
				passvalues = passvalues + 'field'+i+'='+$('#box'+i).find(finddiv).text()+'&pid'+i+'='+$('#box'+i).find('.playerid').text()+'&';
				setcount++;
			}
		}// for loop
		
		//
		//
		if(setcount >= 22){
			return true;
		}else{
			alert('Please add a player to all 22 positions on the field.');
			return false;
		}
	}
	
	/*
		HIDE MESSAGE BOX
	*/
	$('.message').click(function() {
			$(this).css('display','none');
		});
	
});