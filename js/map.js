var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.835471, lng: -87.625888},
    zoom: 16
  });

  var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.835471, -87.625888),
		map: map, 
    icon: './assets/image/mtcc_icon.jpg'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>IIT MTCC</h1><p>MTCC is the central Hub of IIT which many students pass through on the way to class, to their dorm, or to grab a meal.<p>"
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });

  var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(41.83151872944568, -87.62720601087234),
		map: map, 
    icon: './assets/image/tower_icon.jpg'
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "<h1>IIT Tower</h1><p>IIT Tower is located at the southern end of campus and is home many aspects.<p>"
  });

  google.maps.event.addListener(marker2, 'mouseover', function() {
    infowindow2.open(map, marker2);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);