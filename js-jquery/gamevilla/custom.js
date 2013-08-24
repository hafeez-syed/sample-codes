jQuery = jQuery.noConflict();
jQuery(document).ready(function(){
	//jQuery('#menu-item-15276').css({backgroundColor: "#ffcc00"});
	//jQuery('#menu-item-15276 a').css({color: "#000000"});
	//alert(jQuery('#menu-item-15276').css('backgroundColor'));
	//
	//
	 jQuery('.thumb-img').hover(function() {
	  $(this).stop().animate({opacity: "0.5"}, 'slow');
	 },
	 function() {
	  $(this).stop().animate({opacity: "1"}, 'slow');
	 });
	//
	//
	jQuery('.thumb-img').click(function()
	{
		window.scroll(0,0);
		//
		//
		var id = jQuery(this).attr('id');
		//
		//
		if(document.domain == "www.gamevilla.syed-hafeez.com")
		{
			urlString = "http://"+document.domain+"/gaming-videos/featured-videos/1/"+id;
		}
		//
		//
		window.location = urlString;	
	});
	//
	//
	jQuery('.prev').click(function()
	{
		if(document.domain == "www.gamevilla.syed-hafeez.com")
		{
			urlString = "http://"+document.domain+"/gaming-videos/featured-videos//";
		}
		//
		//
		window.location = urlString;	
	});
	//
	//
	jQuery('.prev').hover(function() {
		$(this).css("background-color", "#FFCC00");
		$(this).css("color", "#000000");
	},
	function(){
		$(this).css("background-color", "#1B88FF");
		$(this).css("color", "#FFFFFF");
	});
	//
	//
	jQuery('.next').hover(function() {
		$(this).css("background-color", "#FFCC00");
		$(this).css("color", "#000000");
	},
	function(){
		$(this).css("background-color", "#1B88FF");
		$(this).css("color", "#FFFFFF");
	});
	//
	//
	jQuery('.next').click(function()
	{
		if(document.domain == "www.gamevilla.syed-hafeez.com")
		{
			urlString = "http://"+document.domain+"/gaming-videos/featured-videos/2/";
		}
		//
		//
		window.location = urlString;	
	});
})