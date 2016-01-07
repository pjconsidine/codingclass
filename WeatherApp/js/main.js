$(function() {
	$(window).load(function() {
		var Connect = new XMLHttpRequest();
		Connect.open("GET", "http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=8c4697ce&app_key=1dde4656844165ba667bfa947879e958", false);
		Connect.setRequestHeader("Content-Type", "text/xml");
		Connect.send(null);
		
		var Response = Connect.responseXML;
		var MainEntries = Response.childNodes[0];
		var SubEntries = MainEntries.childNodes;
				
		if (SubEntries.length > 0) {
			ProcessEntries(SubEntries);
		}
		
		$("#result-text").html(MenuData);

	});
	
	var MenuData = "<table class='table'><thead><tr><th>Node Name</th><th>Node Value</th></tr></thead>";
	
	function ProcessEntries(Nodes) {
		for (var i = 1; i < Nodes.length; i+=2) {
			var ThisNode = Nodes[i];
			MenuData += "<tbody>";
			MenuData += "<tr><td>" + ThisNode.nodeName + "</td><td>" + ThisNode.innerHTML + "</td></tr>";
			MenuData += "</tbody>";
		}
		MenuData += "</table>";
	}
});