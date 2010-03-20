function hacked_pingbacks_success(itens) {
	$('#content').html("<ul>");
	itens = itens.query.results["Result"];
	for(var i = 1; i < itens.length; i++) {
		item = itens[i];
		$('#content').append("<li><a href=\"" + item["Url"] + "\">" + item["Title"] + "</a></li>");
	}
	$('#content').append("</ul>");
}

hacked_pingbacks = {
	on : function(base_uri) {
		return {
			fill : function(options) {
				callback_name = "hacked_pingbacks_success";
				if(options) callback_name = options["callback"] || callback_name;
				var uri = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20search.siteexplorer.inlinks%20where%20query%3D%22" + base_uri + "%22&format=json&callback=" + callback_name
				$.ajax({
					url: uri,
					type: "GET",
				});
			}
		};
	}
};
