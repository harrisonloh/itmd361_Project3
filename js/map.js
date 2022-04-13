var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.835471, lng: -87.625888},
    zoom: 15
  });

  var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.835471, -87.625888),
		map: map, 
    icon: './assets/image/mtcc.jpg'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>IIT's MTCC</h1><p>MTCC is the central Hub of IIT<p>"
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);