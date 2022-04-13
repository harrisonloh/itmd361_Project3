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
}
google.maps.event.addDomListener(window, 'load', initMap);