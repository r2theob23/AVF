//Robert Smith
//AVF Term 1304
//Week 2
//main.js


//Twitter
$(function(){
	$.getJSON("http://search.twitter.com/search.json?q=boston%20bombings&rpp=5&include_entities=true&result_type=recent&callback=?", 
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

//Google Map
$("#googlePage").on("pageinit", function(){
	var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);

});

//Connection Status

document.addEventListener("deviceready", appLoaded, false);

      function appLoaded() {
        connectionTest();
    }

    function connectionTest() {
        var connectionType = navigator.connection.type;

        var type = {};
        type[Connection.UNKNOWN]  = 'Unknown connection';
        type[Connection.ETHERNET] = 'Ethernet connection';
        type[Connection.WIFI]     = 'WiFi connection';
        type[Connection.CELL_2G]  = 'Cell 2G connection';
        type[Connection.CELL_3G]  = 'Cell 3G connection';
        type[Connection.CELL_4G]  = 'Cell 4G connection';
        type[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + type[connectionType]);
    };

//Device Info

$("#device").on("pageinit", function(){
     
        $("#deviceInfo").html('Device Name: '     + device.name     + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device Version: '  + device.version  + '<br />'
    );
});




