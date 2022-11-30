// ---------------------------------------------------------- icons ----------------------------------------------------------

var IconCafe = L.icon({
    iconUrl: 'app/images/cafe.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconResto = L.icon({
    iconUrl: 'app/images/resto.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconFastfood = L.icon({
    iconUrl: 'app/images/fastfood.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconParks = L.icon({
    iconUrl: 'app/images/parks.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconMuseum = L.icon({
    iconUrl: 'app/images/museum.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconTheatre = L.icon({
    iconUrl: 'app/images/theatre.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconRiviere = L.icon({
    iconUrl: 'app/images/river.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var IconForet = L.icon({
    iconUrl: 'app/images/foret.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map', ).setView([33.977711, -6.865126], 16); 

new L.basemapsSwitcher([
    {
      layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map), //DEFAULT MAP
      icon: 'SwitchBasemap/example/assets/images/img1.PNG',
      name: 'Open street'
    },
    {
      layer: L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'),
      icon: 'SwitchBasemap/example/assets/images/img2.PNG',
      name: 'Maps'
    },
    {
      layer: L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'),
      icon: 'SwitchBasemap/example/assets/images/sat.PNG',
      name: 'Satellite'
    },
    {
      layer: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      }),
      icon: 'SwitchBasemap/example/assets/images/img3.PNG',
      name: 'Map three'
    },
  ], { position: 'topright' }).addTo(map);

// style="width: 1500px; height: 800px;"
  
var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(33.9895242, -6.8484591),
	],
	createMarker: function (i, waypoints, n) {
		var startIcon = L.icon({
			iconUrl: 'app/dist/img/green.png',
			shadowUrl: 'app/dist/img/shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});
		var sampahIcon = L.icon({
			iconUrl: 'app/dist/img/yellow.png',
			shadowUrl: 'app/dist/img/shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});
		var endIcon = L.icon({
			iconUrl: 'app/dist/img/red.png',
			shadowUrl: 'app/dist/img/shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});
		if (i == 0) {
			marker_icon = startIcon
		} else if (i > 0 && i < n - 1) {
			marker_icon = sampahIcon
		} else if (i == n-1) {
			marker_icon = endIcon
		}
		var marker = L.marker(waypoints.latLng, {
			draggable: true,
			bounceOnAdd: true,
			bounceOnAddOptions: {
				duration: 1000,
				height: 800,
				function() {
					(bindPopup(myPopup).openOn(mymap))
				}
			},
			icon: marker_icon
		});
		return marker
	},
	// geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
})).addTo(map);

map.locate().on("locationfound", function (e) {
	var pos = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
            var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                weight: 1,
                color: 'blue',
                fillColor: '#cacaca',
                fillOpacity: 0.2
            });
			control.spliceWaypoints(0, 1, e.latlng);
            // map.addLayer(pos);
            // map.addLayer(circle);
			map.setView(e.latlng);
  });

var k = 1 ;

function addtoroute(feature) {
    control.spliceWaypoints(k, 1, [Number(feature.split(',')[1]), Number(feature.split(',')[0])]);
	k+=1 ;
  };

// map.on('click', function (e) {
// 	control.spliceWaypoints(k, 1, [33.9895242, -6.8484591]);
// 	k+=1;
// });


// ---------------------------------------------------------- popups ----------------------------------------------------------

var restoadd = L.geoJson(restaurants, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconResto})                   
    }, 
    onEachFeature: function (feature, layer) {layer.bindPopup(
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:200px;height:300x;'></center>" +
        "<b>Restaurant : </b> " + feature.properties.name + 
        "</br>" +"<b>About : </b> "+ feature.properties.about + 
        "</br>" + "<b>Rating : </b>" + feature.properties.Rating +
        "</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
        );
    }
  });

var cafesadd = L.geoJson(cafes, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconCafe})                    
    }, 
    onEachFeature: function (feature, layer) {layer.bindPopup(
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>" +
		"<b>Café's name : </b>" + feature.properties.name + 
		"</br>" +"<b>About : </b> "+ feature.properties.about +
		"</br>" + "<b>Rating : </b>" + feature.properties.rating +
		"</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		);
    }
  });

var fastfoodadd = L.geoJson(fastfood, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconFastfood})                        
    }, 
    onEachFeature: function (feature, layer) {layer.bindPopup(
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>" +
		 "<b>Fastfood's name : </b>" + feature.properties.name + 
		 "</br>" +"<b>About : </b> "+ feature.properties.about +
		 "</br>" + "<b>Rating : </b>" + feature.properties.rating +
		 "</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		 );
    }
  });

var museumadd = L.geoJson(musees, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconMuseum})                        
    }, 
    onEachFeature: function (feature, layer) {
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>" +
        layer.bindPopup("<b>Museum's name : </b>" + feature.properties.name +
		"</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		);
    }
  });

var theatreadd = L.geoJson(theatres, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconTheatre})                        
    }, 
    onEachFeature: function (feature, layer) {
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>"+
        layer.bindPopup("<b>Theater's name : </b>" + feature.properties.name +
		"</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		);
    }
  });

var foretsadd = L.geoJson(forets, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconForet})                        
    }, 
    onEachFeature: function (feature, layer) {
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>" +
        layer.bindPopup("<b>Forest's name : </b>" + feature.properties.name +
		"</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		);
    }
  });

var parcadd = L.geoJson(parcs, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconParks})                        
    }, 
    onEachFeature: function (feature, layer) {
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>"+
        layer.bindPopup("<b>Park's name : </b>" + feature.properties.name +
		"</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		);
    }
  });

var riveradd = L.geoJson(rivieres, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconRiviere})                        
    }, 
    onEachFeature: function (feature, layer) {
        "</b><br> <center> <img src='app/imgpop/"+ feature.properties.name + ".png" + "' style='width:100px;height:200x;'></center>" +
        layer.bindPopup("<b>River's name : </b>" + feature.properties.name +
		"</br>" + '<button onclick="addtoroute(\''+feature.geometry.coordinates+'\')">Click me</button>'
		);
    }
  });

  

L.Routing.errorControl(control).addTo(map);

		// create fullscreen control
		var fsControl = L.control.fullscreen();
		// add fullscreen control to the map
		map.addControl(fsControl);

		// detect fullscreen toggling
		map.on('enterFullscreen', function(){
			if(window.console) window.console.log('enterFullscreen');
		});
		map.on('exitFullscreen', function(){
			if(window.console) window.console.log('exitFullscreen');
		});

    L.geoJSON(roads, {
      style: function(feature) {
          return {color: feature.properties.color}
      }
    
  }).addTo(map);

// ---------------------------------------------------------- Checkbox ----------------------------------------------------------

function validate1() {
    if ($("#restaurant").is(":checked")) {
        restoadd.addTo(map);
        ;}
    else {
        restoadd.remove();
        }}

function validate2() {
    if ($("#cafe").is(":checked")) {
        cafesadd.addTo(map);
        
        ;}
    else {
        cafesadd.remove();
        }}

function validate3() {
    if ($("#fastfood").is(":checked")) {
        fastfoodadd.addTo(map) ;
        ;}
    else {
        fastfoodadd.remove();
        }}

function validate4() {
    if ($("#musee").is(":checked")) {
        museumadd.addTo(map) ;
        ;}
    else {
        museumadd.remove();
        }}
        
function validate5() {
    if ($("#theatre").is(":checked")) {
        theatreadd.addTo(map) ;
        ;}
    else {
        theatreadd.remove();
        }}

function validate6() {
    if ($("#foret").is(":checked")) {
        foretsadd.addTo(map) ;
        ;}
    else {
        foretsadd.remove();
        }}

function validate7() {
    if ($("#parc").is(":checked")) {
        parcadd.addTo(map) ;
        ;}
    else {
        parcadd.remove();
        }}

function validate8() {
    if ($("#riviere").is(":checked")) {
        riveradd.addTo(map) ;
        ;}
    else {
        riveradd.remove();
        }}
