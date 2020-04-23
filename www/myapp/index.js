
Ractive.DEBUG = false;



$(document).on("pageinit","#pageone", onPageCreated);

//some example data
hanbao = [
  { name: 'Hanbao: '},
  { name: ' Small, fast-food eatery offering a range of eastern & western style burgers plus craft cocktails.'},
  { coffee: '4-6 Pump Street, WR1 2QT, +44 1905 723376,  Open: 08:00 - 18:00, '},
  { cafe:'#18  of 76 Cafe in worcester'},
  { rt: '#73 of 225 Restaurants in Worcester'},
  { certificate:'Certificate of Excellence2019 Winner'},
  { food:'Food' },
  { service:'Service'},
  { value:'Value'},
  { nm: 'Website', keystones:'1 Copenhagen Street, WR1 2HB,  +44 1905 731437,  Open: 17:00 - 01:00,', menu: 'https://www.keystonescocktailclub.co.uk/?utm_source=tripadvisor&utm_medium=referral'},
  { ks: '# 119 of 225 Restaurants in Worcester'},
  { f: 'Food'},
  { s: 'Service'},
  { v: 'Value'},
  { askitlian: '2-4-1 EVERY MONDAY ', deals:'Buy any 2 starters, mains, desserts & drinks & get the cheapest free. Available EVERY MONDAY'},
  { taste: 'Taste card', tastecard:'Get 2 for 1 meals or 50% off food at 13 restaurants in Worcester, Just click on the card for the list of restaurants'},
  { miller: 'Miller and carter', carter:'Will treat you to a complimentary glass of wine when you sign up'},
];



function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
		  target: '#target',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#hanbao',
	
		  // Here, we're passing in some initial data
		  data: { restaurant: hanbao }
		  
		});
};


$(document).on("pageinit","#restaurant", onPageCreated2);
//some example data
var ractive, Restaurants;

Rest_Choices = [
  { name: 'Singapore Restaurant', 	  restaurant: '29 Friar ST',     Rating: ' 5/5',    Website: 'http://www.singaporerestaurant.co.uk/', food: ' Menu', menu: 'http://www.singaporerestaurant.co.uk/menu/'},
  { name: 'SUGO',      restaurant: '30 The Tything',   Rating: ' 5/5',      Website: 'https://www.twocraftybrewers.co.uk/sugo', food: ' Menu', menu: 'https://www.twocraftybrewers.co.uk/application/files/9015/8350/7266/Lamb-Resturant-menu.pdf' },
  { name: 'ASK Italian',        restaurant: '2 High street',      Rating: ' 5/5', Website: 'https://www.askitalian.co.uk/' , food: ' Menu', menu: 'https://www.askitalian.co.uk/menu/'},
  { name: 'Hanbao',    restaurant: '4 Foregate St',   Rating: ' 5/5',     Website: 'https://www.hanbao.co.uk/', food: ' Menu', menu: 'https://www.hanbao.co.uk/food/' },
  { name: 'Globe Bistro',    restaurant: '41 Friar St',   Rating: ' 5/5',     Website: 'https://globebistro.net/', food: ' Menu', menu: 'https://globebistro.net/globe-menus/menu/todays-menu/'},
  { name: 'Pasha Everest',    restaurant: '56 St Johns',   Rating: ' 5/5',     Website: 'https://pashaeverest.co.uk/' , food: ' Menu', menu: 'https://pashaeverest.co.uk/menu-1.html'},
  { name: 'Burger shop',    restaurant: 'Arch 46 Cherry Tree ',   Rating: ' 5/5',     Website: 'https://aruleoftum.com/burgershopworc', food: ' Menu', menu: 'https://aruleoftum.com/burgershopworc' },

 
];
function onPageCreated2() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content1',
		    target: '#target',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { Restaurants: Rest_Choices },
		    sort: function( column ) {
  	alert( 'Sorting by' + column )
  }
		});
		
};

$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(52.195959, -2.225788);  // Default to Worcester university
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        
		var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Your location"
        });
		
		
    }


});



