function loadXMLDoc() {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
		   if(xmlhttp.status == 200){
			   document.getElementById("results-text").innerHTML = xmlhttp.responseText;
		   }
		   else if(xmlhttp.status == 400) {
			  alert('There was an error 400')
		   }
		   else {
			   alert('something other than 200 was returned')
		   }
		}
	}

	xmlhttp.open("GET", "http://api.weatherunlocked.com/api/current/47.6358,-122.3438?app_id=8c4697ce&app_key=1dde4656844165ba667bfa947879e958", true);
	xmlhttp.send();
}



// Flickr API key: 9ca681b6d1ccdd6e384846e8011d48c4
