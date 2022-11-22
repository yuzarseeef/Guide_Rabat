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


//restaurants

var restosadd =  L.geoJson(resto  ,{
    pointToLayer: function(feature,latlng){
        switch (feature.properties.type) {
            // case 'cafe': return L.marker(latlng,{icon: IconCafe});
            case 'restaurant': return L.marker(latlng,{icon: IconResto});
            // case 'fast_food': return L.marker(latlng,{icon: IconFastfood});
           }}});

var cafesadd =  L.geoJson(resto  ,{
    pointToLayer: function(feature,latlng){
        switch (feature.properties.type) {
            case 'cafe': return L.marker(latlng,{icon: IconCafe});
           }}});
var fastfoodadd =  L.geoJson(resto  ,{
    pointToLayer: function(feature,latlng){
        switch (feature.properties.type) {
            case 'fast_food': return L.marker(latlng,{icon: IconFastfood});
           }}});

function validate1() {
    if ($("#restaurant").is(":checked")) {
        restosadd.addTo(map) ;
        ;}
    else {
        restosadd.remove();
        }}

function validate2() {
    if ($("#cafe").is(":checked")) {
        cafesadd.addTo(map) ;
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

//activities
var activitesadd = L.geoJson(activites  ,{
    pointToLayer: function(feature,latlng){
        switch (feature.properties.type) {
            case 'museumpointsshp': return L.marker(latlng,{icon: IconMuseum});
            case 'parkspointsshp': return L.marker(latlng,{icon: IconParks});
            case 'theatrespointsshp': return L.marker(latlng,{icon: IconTheatre});
           }}}).addTo(map);

// L.geoJson(activites ,{
//     pointToLayer: function(feature,latlng){
//         switch (feature.properties.type) {
//             case 'museumpointsshp': return L.marker(latlng,{icon: IconMuseum});
//             case 'parkspointsshp': return L.marker(latlng,{icon: IconParks});
//             case 'theatrespointsshp': return L.marker(latlng,{icon: IconTheatre});
//             }}}).addTo(map);

// var theatresadd = L.geoJson(activites ,{
//     pointToLayer: function(feature,latlng){
//         switch (feature.properties.layer) {
//             case 'theatrespointsshp': return L.marker(latlng,{icon: IconTheatre});
//             }}});

// var parcadd = L.geoJson(activites ,{
//     pointToLayer: function(feature,latlng){
//         switch (feature.properties.layer) {
//             case 'parkspointsshp': return L.marker(latlng,{icon: IconParks});
//             }}});

// function validate4() {
//     if ($("#musee").is(":checked")) {
//         museeadd.addTo(map) ;
//         ;}
//     else {
//         museeadd.remove();
//         }}
// function validate5() {
//     if ($("#theatre").is(":checked")) {
//         theatreadd.addTo(map) ;
//         ;}
//     else {
//         theatreadd.remove();
//         }}
// function validate6() {
//     if ($("#parc").is(":checked")) {
//         parcadd.addTo(map) ;
//         ;}
//     else {
//         parcadd.remove();
//         }}

// pop-up

activitesadd.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
