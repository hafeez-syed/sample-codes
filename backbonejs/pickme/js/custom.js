/**
 *
 * @author: 			Hafeez Syed - hafeez.syed@news.com.au
 * @type: 				javascript/jquery
 * @project:			Picke Me
 * @description:		Styles for Picke Me
 *
 */
/**
 *	REFER TO http://jquery.com/
 *
 */
(function($, window, document, undefined) {
	$(document).ready(function() {

		adjust();

		/* =========================================
		   Continue Button Click
		   ========================================== 
		*/
		$('.continue').click(function() {
			$('#overlay-wrapper').hide();
		});

		/* =========================================
			Window Size
		   ========================================== 
		*/		
	    var $window = $(window);
	    //
		// Default Window Size
		//
		//$('.winsize').text($(window).width() + ' / ' + $('#wrapper').width());
		// 
		// ON WINDOW RESIZE
		//
		$(window).resize(function() {
			adjust();
		});// resize
	});


	/* =========================================
	   On Window Load
	   ========================================== 
	*/
	$(window).load(function(){
		adjust();

		//*
		$('.bwWrapper').BlackAndWhite({
			hoverEffect:true,
			webworkerPath: 'js/bnw/',
			speed: 100,
			onImageReady:function(img){
				$(img).parent().animate({
					opacity:1
				});
			}
		});
		
		$('.bwWrapper img')
		.mouseover(function() {
			var parent = $($(this).parent());
			parent.children(".hover-bar").css({'display':'block'});
			parent.children(".play-button").css({'display':'block'});
			parent.children(".player-name").css({'display':'block'});
		})
		.mouseout(function() {
			var parent = $($(this).parent());
			parent.children(".hover-bar").css({'display':'none'});
			parent.children(".play-button").css({'display':'none'});
			parent.children(".player-name").css({'display':'none'});
		})
		//*/
	});


	function adjust() {
		$('.winsize').text('win w: ' + $(window).width() + ', wrap w: ' + $('#wrapper').width()+ ', int h ' + $('.normal-intro').height()+ ', scr w: ' + screen.width+ ', scr h: ' + screen.height);

		$('#list').css({'top':$('.normal-intro').height() + 10});
		//
		//
		/*
		if( ($(window).width() >= 478) && ($(window).width() <= 480) ){
			$('#wrapper li').css({'margin':'0px 12px 24px 12px'});
		}else if( ($(window).width() >= 360) && ($(window).width() <= 400) ){
			$('#wrapper li').css({'margin':'0px 21px 30px 21px'});
		}
		*/
		//else{
		//	$('#wrapper li').css({'margin':'0px'});
		//}
		
	}

})(jQuery, window, document);


