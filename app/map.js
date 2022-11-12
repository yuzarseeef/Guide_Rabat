var map = L.map('map', ).setView([33.977711, -6.865126], 16);
    
// var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

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

style="width: 1500px; height: 800px;"


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

  var control = L.Routing.control(L.extend(window.lrmConfig, {
    waypoints: [
      L.latLng(33.9895242, -6.8484591),
      L.latLng(33.9956475,-6.8475352),
    ],
    createMarker: function (i, waypoints, n) {
      var startIcon = L.icon({
        iconUrl: 'app/dist//img/green.png',
        shadowUrl: 'app/dist//img/shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      var sampahIcon = L.icon({
        iconUrl: 'app/dist//img/yellow.png',
        shadowUrl: 'app/dist//img/shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      var endIcon = L.icon({
        iconUrl: 'app/dist//img/red.png',
        shadowUrl: 'app/dist//img/shadow.png',
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
  
  var k = 2 ;
  
  map.on('click', function (e) {
    control.spliceWaypoints(k, 1, e.latlng);
    k+=1;
  });
  L.Routing.errorControl(control).addTo(map);