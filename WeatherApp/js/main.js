var lat, lon, Position;

Position = "10,10";

var url = "https://api.forecast.io/forecast/795262f49355bceab3dbfbe52121e3b6/" + Position;

console.log(url);

(function($) {
	$.ajax({
		type: 'GET',
		url: url,
		async: true,
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(results) {
			var data = results;
			$("#submit").click(function(){
				ProcessEntries(data);
			});
		}
	});
})(jQuery);

function ProcessEntries(data) {
	Handlebars.registerHelper("formatDateTime", function(time) {
		var timestampValue = parseInt((time),10);
		var dt = new Date(timestampValue*1000);
		var hours = (dt.getHours() + 24) % 12 || 12;
		var meridien = function (){
			if (dt.getHours() > 12) {
				return "PM";
			} else {
				return "AM";
			}
		}
		return (dt.getMonth()+1) + '/' + dt.getDate() + '/' + dt.getFullYear() + ", " + hours + ":" + String("0" + dt.getMinutes()).slice(-2) + " " + meridien();
	});
	
	Handlebars.registerHelper("formatTemp", function(temp) {
		var tempF = Math.round(temp * 10) / 10;
		var tempC = Math.round((temp - 32) * (5/9) * 10) /10;
		return tempF + "&deg;F / " + tempC + "&deg;C";
	});
	
	var source1 = $("#currentTemplate").html();
	var template1 = Handlebars.compile(source1);

	var source2 = $("#forecastTemplate").html();
	var template2 = Handlebars.compile(source2);
	$("#result-text").html(template2(data.daily));
}