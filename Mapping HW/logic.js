
var apiKey = "pk.eyJ1IjoiYWJlbGhhaWxlNzc4MTQiLCJhIjoiY2s5bTI5djluMmNjdDNnbzF5eDl0cHp6MiJ9.AhN7hvPCWIsYjY49O8TMzg";
var graymap = L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery Â© <a href='https://www.mapbox.com/'>Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: apiKey
    });
var map = L.map("map", {
    center: [
        40.7, -94.5
    ],
    zoom: 3

});
graymap.addTo(map);
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
// Here we make an AJAX call that retrieves our earthquake geoJSON data.
d3.json(url, function(data) {
L.geoJson(data, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng);
  },
  style: {
    opacity: 1,
    fillOpacity: 1
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature
      .properties.place);
  }
}).addTo(map);
    var legend = L.control({
        position: "bottomright"
    });
    // Finally, we our legend to the map.
    legend.addTo(map);
});

