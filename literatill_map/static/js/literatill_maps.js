/* Create the map */
// setting up coordinates for map to display
content = document.getElementById('nav-trigger');

var city = ol.proj.transform([-73.920935,40.780229], 'EPSG:4326', 'EPSG:3857');


// setting up openlayer3 view
var view = new ol.View({
    center: city,
    zoom: 13
});


// Create the map
var map = new ol.Map({
  target: 'map',
  renderer: 'canvas',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: view
});


// Setup markers
var markers = new ol.layer.Vector({
  tittle: 'City Apratments',
  source: new ol.source.Vector({
    features: [
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.927870, 40.763633])),
      }),
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.917356, 40.763958])),
      }),
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.915530, 40.779665])),
      }),
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.916045, 40.779372])),
      }),
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.919682, 40.777365])),
      }),
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.908980, 40.776013])),
      }),
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.917356, 40.763958])),
      })
    ]
  }),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixel',
      opacity: 0.75,
      src: 'http://openlayers.org/en/v3.12.1/examples/data/icon.png',
    })
  })
});
map.addLayer(markers);

// Setting up click function for the map
var content = document.getElementById('nav-trigger');
map.on('singleclick', function(evt) {
  var name = map.forEachFeatureAtPixel(evt.pixel, function(feature){
  });
});
