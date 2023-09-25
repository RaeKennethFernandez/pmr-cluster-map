var map = L.map('map').setView([8.011424, 125.279184], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor | custom by CAFE'
}).addTo(map);

var markers = L.markerClusterGroup();

// Load the JSON data from a file
fetch('pmr.json') // Replace 'addressPoints.json' with the actual path to your JSON file
  .then(response => response.json())
  .then(data => {
    data.forEach(point => {
      var title = point.title;
      var marker = L.marker(new L.LatLng(point.lat, point.long), {});

      marker.bindPopup("<h2>" + title + "</h2>");

      markers.addLayer(marker);

      marker.on('click', function (ev) {
        var latlng = map.mouseEventToLatLng(ev.originalEvent);
        console.log(latlng.lat + ', ' + latlng.lng);
      });
    });

    map.addLayer(markers);
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
