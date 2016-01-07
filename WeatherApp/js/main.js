$(function() {
	$(window).load(function() {
		
		var Connect = new XMLHttpRequest();
		Connect.open("GET", "./all_xml/42S39.xml", false);
		Connect.setRequestHeader("Content-Type", "text/xml");
		Connect.send(null);
		
		var Response = Connect.responseXML;
		var MainEntries = Response.childNodes[1];
		var SubEntries = MainEntries.childNodes;
		// var tempF = SubEntries[21].innerHTML;
		// var tempC = SubEntries[23].innerHTML;
				
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