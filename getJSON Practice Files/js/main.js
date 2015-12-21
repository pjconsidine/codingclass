var userData = [];

function test(data, x) {
	x = data;
	console.log(x)
}

$.ajax({
	type: "GET",
	url: "./MOCK_DATA.js",
	mimeType: "application/json",
	success: function(data){
		test(data, userData);
	},
	error: function(error) {
		console.log("No data received");
	}
});
