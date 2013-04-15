//Robert Smith
//AVF Term 1304
//Week 2
//main.js

$(function(){
	
	$.getJSON("http://search.twitter.com/search.json?q=blue%20angels&rpp=5", 
		function(data){
			console.log(data)
			$("#data-msg").html("<p>Data Obtained</p>")
			for(i=0, j=data.results.length; i<j; i++){
				$("#data-output")
					.append("<li>" + 
						"<p>" + "<img src=" + data.results[i].profile_image_url + "/><br />" + 
							data.results[i].text + ", <em>" + data.results[i].created_at + "</em>" + 
								"</p>" + 
									"</li>");			
				}
		});
});

