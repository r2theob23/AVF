//Robert Smith
//AVF Term 1304
//Week 2
//main.js

$(function(){
	
	$.getJSON("http://search.twitter.com/search.json?q=boston%20bombings&rrp=50&result_type=resent", 
		function(data){
			console.log(data)
			$("#heading").html("<p>Recent Tweets Regarding Tragedy in Boston</p>")
			for(i=0, j=data.results.length; i<j; i++){
				$("#tweets")
					.append("<li>" + 
						"<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + 
							data.results[i].text + ", <em>" + data.results[i].created_at +"</em>" + 
								"</p>" + 
									"</li>");			
				}
		});
});

