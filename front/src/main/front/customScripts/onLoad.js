/**
 * Created by abajramov on 02/05/2017.
 */
$(document).ready(function () {
  //Activates elements with materialboxed class
  $('.materialboxed').materialbox();
  //Activates elements with modal class
  initMap();
  $('.modal').modal({
    dismissiable: true,
    ready: function(modal, trigger) {
      console.log(modal, trigger);
      var map = document.getElementById("map");
      google.maps.event.trigger(map, 'center');
    }
  });
});

function initMap() {
  var coordinates = {lat: 50.7977645, lng: 4.417587};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: coordinates
  });
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map
  });
}
