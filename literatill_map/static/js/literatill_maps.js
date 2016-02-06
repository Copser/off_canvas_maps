/* Create the map */
// setting up coordinates for map to display
var infobox = document.getElementById("info");

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


var Data =
  [ { title: "Property 1",
      address: "Some Random Address 1",
      image: "/static/img/condo1.jpg",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      longlat: [-73.927870, 40.763633]
    }
  , { title: "Property 2",
      address: "Some Random Address 2",
      image: "static/img/condo2.jpeg",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      longlat: [-73.917356, 40.763958]
    }
  , { title: "Property 3",
      address: "Some Random Address 3",
      image: "static/img/condo3.jpeg",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      longlat: [-73.915530, 40.779665]
    }
  , { title: "Property 4",
      address: "Some Random Address 4",
      image: "static/img/condo4.jpeg",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      longlat: [-73.916045, 40.779372]
    }
  , { title: "Property 5",
      address: "Some Random Address 5",
      image: "static/img/condo5.jpg",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      longlat: [-73.919682, 40.777365]
    }
  , { title: "Property 6",
      address: "Some Random Address 6",
      image: "static/img/condo6.jpg",
      description: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      longlat: [-73.908980, 40.776013]
    }
  ];


function buildFeature(data) {
  return new ol.Feature(
    { geometry: new ol.geom.Point(ol.proj.fromLonLat(data.longlat))
    , data: data
    }
  );
}


function curryclickonmarker(element) {
  return function (event) {
    return clickOnMarker(element, event);
  }
}

function clickOnMarker(info, event) {
  // Ovo je mnogo ruzan nacin da se dolazi do podataka
  // Treba bolje pogledati OL3 API
  // I treba imati u vidu kakvu strukturu ti imas
  // i sta ti treba, ali, resenje along the lines
  var marker = event.selected[0];
  var data = marker.G.data;


  // I ovde sada feedujes podatke u DOM
  info.innerHTML = "<h1>"+data.title+"</h1><h2><p>Address: "+data.address+"</p></h2><p>Description: "+data.description+"<p><img src="+data.image+"/>";
}

var selectClick = new ol.interaction.Select();

selectClick.on("select", curryclickonmarker(infobox));
// Setup markers

var features = Data.map(buildFeature);

var markers = new ol.layer.Vector({
  tittle: 'City Apratments',
  source: new ol.source.Vector({
    features: features
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
map.addInteraction(selectClick);

// Capturing mouse movement on the map
map.on('pointermove', function(event) {
    if (evt.dragging) {
        return; 
    }
    // Access coordinates from evt.coordinate now
});
