
var addressPoints = [
  {
   lat:8.152254, 
   long:124.784990,
   title:"Mt. Kitanglad Mountain Range"
  },

  {
   lat:7.961891, 
   long:124.741015,
   title:"Mt. Kalatungan Mountain Range"
  },
  {
   lat:7.961891, 
   long:124.741015,
   title:"Mt. Kalatungan Mountain Range"
  }

];


var map = L.map('map').setView([8.011424, 125.279184], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor | custom by CAFE'
}).addTo(map);

var markers = L.markerClusterGroup();

//Markers
for (var i = 0; i < addressPoints.length; i++)
{
 // var a = addressPoints[i];
  var title = addressPoints[i].title;
  var marker = L.marker(new L.LatLng(addressPoints[i].lat, addressPoints[i].long),
  {});

  
  marker.bindPopup( " <h2>"+title+"</h2>" );


  markers.addLayer(marker);
  
  marker.on('click', function(ev){
    var latlng = map.mouseEventToLatLng(ev.originalEvent);
    console.log(latlng.lat + ', ' + latlng.lng);
  });
  

}



map.addLayer(markers);