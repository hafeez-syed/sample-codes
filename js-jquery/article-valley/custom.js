var gAutoPrint 	= true; // Tells whether to automatically call the print function
	var style		= "<style>body{color:#000; font-family:'Droid Serif', serif; font-size: 15px;} p{text-align: justify;}</style>";
	var logo		= "<img src='http://www.article-valley.syed-hafeez.com/images/logo-live.png' />";
	function printSpecial()
	{//function
		var html = style;
		html	+= logo;
		var printReadyElem1 = document.getElementById("articleheading");
		var printReadyElem2 = document.getElementById("articlepara1");
		if (printReadyElem1 != null && printReadyElem2 != null)
		{// if 1
			html += printReadyElem1.innerHTML;
			html += printReadyElem2.innerHTML;
		}else{
			alert("Could not find the printReady function");
			return;
		}// if 1
		var printWin = window.open("","printSpecial");
		printWin.document.open();
		printWin.document.write(html);
		printWin.document.close();
		if (gAutoPrint)
		{// if 2
			printWin.print();
		}else{
			alert("The print ready feature is only available if you are using a browser. Please update your browser.");
		}// if 2
}// function