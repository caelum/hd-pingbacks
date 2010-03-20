function hacked_pingbacks_success(itens) {
	$('#content').html("<ul>");
	itens = itens.query.results["Result"];
	for(var i = 1; i < itens.length; i++) {
		item = itens[i];
		var line = "<li><a href=\"" + item["Url"] + "\">" + item["Title"] + "</a></li>";
		$('#content').append(line);
	}
	$('#content').append("</ul>");
}

hacked_pingbacks = {
	on : function(base_uri) {
		return {
			fill : function(options) {
				callback_name = "hacked_pingbacks_success";
				if(options) callback_name = options["callback"] || callback_name;
				var uri = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20search.siteexplorer.inlinks%20where%20query%3D%22" + base_uri + "%22&format=json&callback=?";
				$.getJSON(uri, function(data) {
					if(options && options["callback"]) {
						options["callback"](data);
					} else {
						hacked_pingbacks_success(data);
					}
				});
			}
		};
	}
};
