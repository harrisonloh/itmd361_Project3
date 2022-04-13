var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.835471, lng: -87.625888},
    zoom: 12
  });
}
google.maps.event.addDomListener(window, 'load', initMap);