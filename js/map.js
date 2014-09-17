// This is a JavaScript file

//$(document).ready(function() {
function launchol(){
    $.getJSON("http://www.telize.com/geoip?callback=?",
        function(json) {
    	//	document.write("Geolocation information for IP address : ", json.ip);
    	//	document.write("Country : ", json.country);
    	//	document.write("Latitude : ", json.latitude);
	    //	document.write("Longitude : ", json.longitude);
        //console.log(json);
        mapit(json.longitude,json.latitude);
        markerlay(json.longitude,json.latitude);
        parse_country(localStorage.getItem("local_id"),json.country);
});
};

function mapit(lon,lat){
        window.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
           // source: new ol.source.MapQuest({layer: 'osm'})
          source: new ol.source.OSM()
          
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'),
          zoom: 11
        })
      });
     ;}


// onSuccess Callback
// This method accepts a Position object, which contains the current GPS coordinates

var onSuccess = function(position) {
/* 
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
*/
//alert(position.coords.longitude+","+position.coords.latitude);
var mylon = position.coords.longitude;
var mylat = position.coords.latitude;

map.getView().setCenter(ol.proj.transform([mylon,mylat], 'EPSG:4326', 'EPSG:3857'));
map.getView().setZoom(16);
//adds marker to current gps coordinates
markerlay(mylon,mylat);
//Stores this variable into local storage
localStorage.setItem("local_lon",mylon);
localStorage.setItem("local_lat",mylat);
parse_latlon(localStorage.getItem("local_id"),mylat,mylon);
};

// onError Callback receives a PositionError object

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
};

function butclick(){
navigator.geolocation.getCurrentPosition(onSuccess, onError);
//Cordova takes phone location data via navigator object and executes onSuccess function
};

function markerlay(lon,lat){
    //Remove previous markers
    $('#addedmarker').remove();
    map.addOverlay(new ol.Overlay({
    position: ol.proj.transform([lon,lat], 'EPSG:4326', 'EPSG:3857'),
    element: $('<img id="addedmarker" src="img/marker.png">')
    //.css({marginTop: '-200%', marginLeft: '-50%', cursor: 'pointer'})
    // .tooltip({title: 'Hello, world!', trigger: 'click'})
    }));
}
