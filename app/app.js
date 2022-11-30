// ---------------------------------------------------------- icons ----------------------------------------------------------

var IconCafe = L.icon({
    iconUrl: 'app/images/cafe.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconResto = L.icon({
    iconUrl: 'app/images/resto.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconFastfood = L.icon({
    iconUrl: 'app/images/fastfood.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconParks = L.icon({
    iconUrl: 'app/images/parks.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconMuseum = L.icon({
    iconUrl: 'app/images/museum.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconTheatre = L.icon({
    iconUrl: 'app/images/theatre.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconRiviere = L.icon({
    iconUrl: 'app/images/river.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var IconForet = L.icon({
    iconUrl: 'app/images/foret.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [15, 15], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 15],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



// ---------------------------------------------------------- popups ----------------------------------------------------------

var restoadd = L.geoJson(restaurants, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconResto})                   
    }, 
    onEachFeature: function (feature, layer) {layer.bindPopup(
        "<b>Restaurant : </b> " + feature.properties.name + 
        "</br>" +"<b>About : </b> "+ feature.properties.about + 
        "</br>" + "<b>Rating : </b>" + feature.properties.Rating +
        "</br>" + '<button onclick="addtoroute(feature)">Click me</button>' 
        );
    }
  });

var cafesadd = L.geoJson(cafes, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconCafe})                    
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Café's name : </b>" + feature.properties.name + "</br>" +"<b>About : </b> "+ feature.properties.about +"</br>" + "<b>Rating : </b>" + feature.properties.rating);
    }
  });

var fastfoodadd = L.geoJson(fastfood, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconFastfood})                        
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("</b><br> <center> <img src='" + layer.feature.properties.Image + "' style='width:200px;height:300x;'></center>" 
        + "<b>Fastfood's name : </b>" + feature.properties.name + "</br>" +"<b>About : </b> "+ feature.properties.about +"</br>" + "<b>Rating : </b>" + feature.properties.rating);
    }
  });

var museumadd = L.geoJson(musees, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconMuseum})                        
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Museum's name : </b>" + feature.properties.name );
    }
  });

var theatreadd = L.geoJson(theatres, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconTheatre})                        
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Theater's name : </b>" + feature.properties.name );
    }
  });

var foretsadd = L.geoJson(forets, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconForet})                        
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Forest's name : </b>" + feature.properties.name );
    }
  });

var parcadd = L.geoJson(parcs, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconParks})                        
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>Park's name : </b>" + feature.properties.name );
    }
  });

var riveradd = L.geoJson(rivieres, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng,{icon: IconRiviere})                        
    }, 
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>River's name : </b>" + feature.properties.name );
    }
  });

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






