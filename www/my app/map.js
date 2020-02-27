var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


/*function myMap() {
  var uluru = {lat: 52.194589, lng: -2.221570}; 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">HANBAO</h1>'+ '<h2> Star rating </h2> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>'+
      '<div id="bodyContent">'+
      '<p><b>Hanbao</b>, the burger restaurant<br></br>' +
      'Small, fast-food eatery offering a range of eastern & western style burgers plus craft cocktails.<br></br>'+
      '<b> Atmosphere </b> <br></br>'+
      'Casual and cosy <br></br> '+
      '<b>Amenities</b><br></br>'+
      'Bar onsite, good for kids, high chairs, toilets'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
