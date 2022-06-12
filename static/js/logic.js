


// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.


// Add GeoJSON data.


let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Create a polyline using the line coordinates and make the line red.
// An array containing each city's location, state, and population.
// Get data from cities.js
// Grabbing our GeoJSON data.
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(feature);
    return L.marker(layer)
    .bindPopup("<h2>" + feature.properties.city + "</h2>");
   }
  }).addTo(map);
//}).addTo(map);
// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);