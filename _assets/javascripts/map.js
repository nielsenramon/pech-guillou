function initMap() {
  var styles = [
    [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
  ];
  var bruges = new google.maps.LatLng(44.276257, 0.834423);

  var mapOptions = {
    scrollwheel: false,
    zoom: 9,
    draggable: false,
    center: bruges,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'bestfromgoogle']
    }
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var styledMapOptions = {
    name: "Pech Guillou"
  };

  var jayzMapType = new google.maps.StyledMapType(styles, styledMapOptions);

  map.mapTypes.set('bestfromgoogle', jayzMapType);
  map.setMapTypeId('bestfromgoogle');

  var companyPos = new google.maps.LatLng(44.276257, 0.834423);

  var companyMarker = new google.maps.Marker({
    map: map,
    position: companyPos,
    icon: {
      url: "",
      scaledSize: new google.maps.Size(35, 35),
      anchor: new google.maps.Point(17, 17),
    },
    title: "Typework",
    zIndex: 5
  });

  var bounds = new google.maps.LatLngBounds(new google.maps.LatLng(-84.999999, -179.999999), new google.maps.LatLng(84.999999, 179.999999));
};
