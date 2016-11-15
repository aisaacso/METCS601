$(document).ready(function(){
	
	$('#hongbutton').click(function(){
		$('#jinbio').hide();
		$('#alfonsobio').hide();
		$('#hongbio').show();
	});

	$('#jinbutton').click(function(){
		$('#alfonsobio').hide();
		$('#hongbio').hide();
		$('#jinbio').show();
	});

	$('#alfonsobutton').click(function(){
		$('#hongbio').hide();
		$('#jinbio').hide();
		$('#alfonsobio').show();
	});


	function init_map() {
		var var_location = new google.maps.LatLng(41.633505,-71.471759);

		var var_mapoptions = {
	  		center: var_location,
	  		zoom: 14
		};

		var var_marker = new google.maps.Marker({
			position: var_location,
	    	map: var_map,
			title:"Grandmaster Hong's World Class Taekwondo Center"});

		var var_map = new google.maps.Map(document.getElementById("map-container"),
	    	var_mapoptions);

		var_marker.setMap(var_map);	
	}

//prevent loading on every page
	google.maps.event.addDomListener(window, 'load', init_map);

	$('#childclicker').click(function(){
		$('#childbody').show();
		$('#familybody').hide();
		$('#teenbody').hide();
		$('#adultbody').hide();
	});

	$('#familyclicker').click(function(){
		$('#familybody').show();
		$('#childbody').hide();
		$('#teenbody').hide();
		$('#adultbody').hide();
	});

	$('#teenclicker').click(function(){
		$('#teenbody').show();
		$('#familybody').hide();
		$('#childbody').hide();
		$('#adultbody').hide();
	});

	$('#adultclicker').click(function(){
		$('#adultbody').show();
		$('#familybody').hide();
		$('#teenbody').hide();
		$('#childbody').hide();
	});
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('blackbelt');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	    captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
}

});
