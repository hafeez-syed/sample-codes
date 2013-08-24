function fetchData(ob)
{
	var chk="";
	var cuonter=0;
	var temp 	= new Array();
	if(str != "")
	{
		var str	 	= ob;
		temp 	 	= str.split(",");
	}
	//
	//
	$.getJSON('technologies.php', function(data)
	{
		var col = 0;
		var htmlData="<table>";
		htmlData = htmlData + "<tr>";
		 $.each(data, function(key, val) {
			col++;
			chk = "";
			//
			//
			for(var a=0; a<=temp.length-1; a++)
			{
				temp[a] = temp[a].trim();
				if(String(temp[a]) == String(val))
				{
					chk = "checked='checked'";
				}
			}
			//
			//
			htmlData = htmlData + "<td>";
				htmlData = htmlData + "<input class='techno' type='checkbox' name='tech' value='"+val+"' "+chk+" />" + val + "</li>";
			htmlData = htmlData + "</td>";
			//
			//
			if(col==3)
			{
				col=0;
				htmlData = htmlData + "</tr>";
				htmlData = htmlData + "<tr>";
			}
		 });
		 htmlData = htmlData + "</table>";
		document.getElementById("technologies").innerHTML = htmlData;
		
	});
}
//
//
$(document).ready(function(){
	/*
		SUBMITTING NEW PROJECT and its DESCRIPTION
	*/
	$('#submit').click(function(){
		var type 	= '';
		var title 	= '';
		var country = '';
		var image 	= '';
		var url 	= '';
		var tech 	= '';
		//
		// Project Type
		//
		project_type = $('#proj').val();
		//
		// Project DESCRIPTION ID
		//
		pdesc_id	= $('#pid').val();
		//
		// Project Title
		//
		title 		= $('#title').val();
		//
		// Project Type
		//
		country 	= $('#country').val();
		//
		// Project Type
		//
		image 		= $('#image').val();
		//
		// Project Type
		//
		url 		= $('#url').val();
		//
		// IS Project LIVE?
		//
		live 		= $('#live').val();
		//
		// Form Action
		//
		doit 			= $('#do').val();
		//
		// Technologies
		//
		$('#technologies input[type=checkbox]').each(function(){
			if(this.checked){
				tech = tech + $(this).val() + ", ";
			}
		});
		var technology = tech.substr(0, tech.length-2);
		var dta 	   = "page_type=projDesc&project_type="+project_type+"&pdesc_id="+pdesc_id+"&title="+title+"&country="+country+"&image="+image+"&url="+url+"&tech="+technology+"&live="+live+"&do="+doit;
		$.ajax({
			type: "POST",
			url: "crud.php",
			data: dta,
			success: function(data){
				if(data=="INSERTED"){
					$('#message').text('Success! Project Description has been added to the database!');
					resetAll();
				}else if(data=="UPDATED"){
					$('#message').text('Success! Project Description has been updated!');
				}else{
					$('#message').text('Error Ocurred!');
				}
			}
		});
	});
	//
	//
	/*
		REQUEST TO UPDATE PROJECT and its DESCRIPTION
	*/
	$('.update-project .updateprojectbutton').click(function(){
		window.location.replace("project_description.php?pdescid="+$(this).parent().find('input').last().attr('value'));
	});
	//
	//
	// RESET ALL FIELDS AFTER FORM SUBMISSION
	//
	//
	function resetAll()
	{
		$('#title').val('');
		$('#country').val('');
		$('#image').val('');
		$('#url').val('');
	}
});