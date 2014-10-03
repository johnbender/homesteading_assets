//= require modernizr
//= require jquery
//= require jquery_ujs
//= require jquery.simplyCountable

// for p-location geo fields
// TODO: extract into plugin and out of global namespace
function getLocation() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(populateGeoFields);
  }
}

// TODO: extract into plugin and out of global namespace
function populateGeoFields(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;
  var altitude  = position.coords.altitude;

  $(".new .p-location .p-latitude" ).val(latitude);
  $(".new .p-location .p-longitude").val(longitude);
  $(".new .p-location .p-altitude" ).val(altitude);
}


// for dt-published datetime field
// TODO: extract into plugin and out of global namespace
function ISODateString(d){
  function pad(n) { return n < 10 ? "0" + n : n }
  return d.getUTCFullYear()+"-"
    + pad(d.getUTCMonth()+1)+"-"
    + pad(d.getUTCDate())+"T"
    + pad(d.getUTCHours())+":"
    + pad(d.getUTCMinutes())+":"
    + pad(d.getUTCSeconds())+"-07:00"
}


$(function() {
  // prints something like 2009-09-28T19:03:12Z
  $(".new .dt-published").val(ISODateString(new Date()))

  // ask user to access their location
  // populate lat/lon/alt fields
  // TODO: extract into plugin and out of global namespace
  getLocation();
});
