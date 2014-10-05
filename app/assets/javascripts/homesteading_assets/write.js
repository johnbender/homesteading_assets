//= require homesteading_assets/vendor/modernizr
//= require homesteading_assets/vendor/jquery
//= require jquery_ujs
//= require homesteading_assets/vendor/jquery.simplyCountable

// for p-location geo fields
// TODO: extract into plugin and out of global namespace
(function($) {
  function withLocation(callback) {
    if (Modernizr.geolocation) {
      navigator.geolocation.getCurrentPosition(callback);
    }
  }

  // TODO: extract into plugin and out of global namespace
  function populateGeoFields(position) {
    var latitude, longitude, altitude, $pLocation;

    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    altitude  = position.coords.altitude;

    $pLocation = $(".new .p-location");

    $pLocation.find(".p-latitude" ).val(latitude);
    $pLocation.find(".p-longitude").val(longitude);
    $pLocation.find(".p-altitude" ).val(altitude);
  }

  function pad(n) {
    return n < 10 ? "0" + n : n;
  };

  // for dt-published datetime field
  // TODO: extract into plugin and out of global namespace
  function ISODateString(d){
    return d.getUTCFullYear()+"-"
      + pad(d.getUTCMonth()+1)+"-"
      + pad(d.getUTCDate())+"T"
      + pad(d.getUTCHours())+":"
      + pad(d.getUTCMinutes())+":"
      + pad(d.getUTCSeconds())+"-07:00";
  }

  $(function() {
    // prints something like 2009-09-28T19:03:12Z
    $(".new .dt-published").val(ISODateString(new Date()));

    // ask user to access their location
    // populate lat/lon/alt fields
    // TODO: extract into plugin and out of global namespace
    withLocation(populateGeoFields);
  });
})(window.jQuery);
