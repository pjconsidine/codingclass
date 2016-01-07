$(function() {
	$(window).load(function() {
		var Connect = new XMLHttpRequest();
		Connect.open("GET", "./all_xml/41S47.xml", false);
		Connect.setRequestHeader("Content-Type", "text/xml");
		Connect.send(null);
		
		var Response = Connect.responseXML;
		var MainEntries = Response.childNodes[1];
		var SubEntries = MainEntries.childNodes;
		var tempF = SubEntries[21].innerHTML;
		var tempC = SubEntries[23].innerHTML;
				
		if (SubEntries.length > 0) {
			ProcessEntries(SubEntries);
		}
		
		$("#result-text").html(MenuData);

	});
	
	var MenuData = "";
	
	function ProcessEntries(Nodes) {
		for (var i = 1; i < Nodes.length; i+=2) {
			var ThisNode = Nodes[i];
			console.log(ThisNode);
			MenuData += "<li><b>" + ThisNode.nodeName + ":</b> " + ThisNode.innerHTML + "</li>";
		}
	}
});