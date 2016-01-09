(function($) {
	$.ajax({
		type: "GET",
		url: "https://ip-api.com/json",
		async: false,
		contentType: "application/json",
		dataType: "jsonp",
		success: function(data) {
			var lat = data.lat;
			var lon = data.lon;
			console.log(lat + ", " + lon);
		},
		error: function(error) {
			$("#result-text").html("Location not found:" + error);
		}
	});
})(jQuery);

(function($) {
	var url = 'https://api.forecast.io/forecast/795262f49355bceab3dbfbe52121e3b6/0,0';
	$.ajax({
		type: 'GET',
		url: url,
		async: false,
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(results) {
			var data = results;
			ProcessEntries(data.currently);
			ProcessEntries(data.daily);
		}
	});
})(jQuery);

var MenuData = "<table class='table'><thead><tr><th>Property Name</th><th>Property Value</th></tr></thead>";
	
function ProcessEntries(results) {
	var Keys = Object.keys(results);
	
	for (var i = 0; i < Keys.length; i++) {
		var thisProperty = Keys[i];
		var thisPropertyValue = results[thisProperty];
		MenuData += "<tbody>";
		MenuData += "<tr><td>" + thisProperty + "</td><td>" + thisPropertyValue + "</td></tr>";
		MenuData += "</tbody>";
	}
	MenuData += "</table>";
	
	$("#result-text").html(MenuData);
}
