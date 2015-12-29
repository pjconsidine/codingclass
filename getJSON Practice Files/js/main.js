$(document).ready(function() {	
	$("#scriptText").html("Worldwide users");
	
	$("#submit").click(function() {
		$.ajax({
			type: "GET",
			url: "./MOCK_DATA.json",
			mimeType: "application/json",
			success: function(data){
				var userCountry = $("#userCountry").val();
				var newData = {};
				
				var userData = data.users.filter(function(element, index, array) {
					if (element.country == userCountry) {
						newData[element.id] = element;
					}
				});
				
				userData = {"users":{newData}};
				
				var source = $("#HBtemplate").html();
				var template = Handlebars.compile(source);
				$("#scriptText").html(template(userData));
			},
			error: function(error) {
				console.log("No data received");
			}
		});
	});
});
