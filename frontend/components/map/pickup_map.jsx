import React from "react";
import { withRouter } from "react-router-dom";

// circle marker params
const LIGHT_CIRCLE = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 15,
  fillColor: "#FFFFFF",
  strokeColor: "#FFFFFF",
  fillOpacity: 1.0,
  strokeWeight: 0.4
}

// dark circle marker params
const DARK_CIRCLE = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 15,
  fillColor: "#000000",
  strokeColor: "#000000",
  fillOpacity: 1.0,
  strokeWeight: 0.4
}

// map options for controls
const MAP_OPTIONS = {
  center: { lat: 40.6962131, lng: -74.302344 }, // Union, NJ
  zoom: 15,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false
};

// maps query params
const REQUEST = {
  location: MAP_OPTIONS.center,
  radius: 5000, // meters
  type: ['restaurant']
}

// map styling to hide default pois
const STYLES = {
  default: [],
  hide: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "off" }],
    },
  ],
};

class BenchMap extends React.Component{

  constructor(props){
    super(props);
    this.createMarker = this.createMarker.bind(this);
    this.mapCallback = this.mapCallback.bind(this);
    this.closeInfoWindows = this.closeInfoWindows.bind(this);
    this.map;
    this.service;
    this.markers = [];
    this.infoWindows = [];
  }

  createMarker(place) {
    const map = this.map;

    // create a new maker on the map per location
    const marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name,
      label: {
        text :`${place.rating}`,
        color: "black"
      },
      icon: LIGHT_CIRCLE
    })

    // add markers to component attributes
    this.markers.push(marker);

    // sets marker content
    const markerContent = 
    `<div class="marker-content">` +

      `<img src="${place.photos[0].getUrl()}"
        alt="restaurant-photo" class="infowindow-photo"></img>` +

      `<h3 class="infowindow-title">${place.name}</h3>` +

      `<span class="infowindow-rating">Rating: ${place.rating}</span>` +
      `<span class="infowindow-reviewcount">

        Reviews: ${place.user_ratings_total}</span>` +
        
      `<span class="infowindow-price">Price: ${'$'.repeat(place.price_level)}`+
    `</div>`;

    // sets info window
    const infoWindow = new google.maps.InfoWindow({
      content: markerContent,
      maxWidth: 250
    })

    // add infoWindows to component attributes
    this.infoWindows.push(infoWindow);

    const that = this;

    // opens info window on click, closes all other open info windows
    marker.addListener("click", () => {
      that.closeInfoWindows();
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false
      })
    })

    // darkens circle on hover
    marker.addListener("mouseover", () => {
      const label = marker.getLabel();
      label.color = "white"
      marker.setLabel(label);

      marker.setIcon(DARK_CIRCLE);
    })

    // lightens circle when mouse not over
    marker.addListener("mouseout", () => {
      const label = marker.getLabel();
      label.color = "black";
      marker.setLabel(label);

      marker.setIcon(LIGHT_CIRCLE)
    })
  }

  // helper method to close other info windows
  // we only want one open at a time
  closeInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  // helper callback for the nearbySearch function
  mapCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i])
      }
    }
  }

  // set up map when component mounts;
  componentDidMount() {
    
    // wrap this.mapNode in a Google Map
    // this.map = new google.maps.Map(this.mapNode, MAP_OPTIONS);
    // this.map.setOptions({ styles: STYLES["hide"] });
    // initialize places service
    // this.service = new google.maps.places.PlacesService(this.map);

    // populate map with markers
    // this.service.nearbySearch(REQUEST, this.mapCallback);
  }

  // remove map, service, attributes when component unmounts
  componentWillUnmount() {
    this.map = null;
    this.service = null;
    this.markers = null;
    this.infoWindows = null;
  }

  render() {
    return (
      <div ref={ map => this.mapNode = map } id='map-container'>
      </div>
      // <div id='map-container'>Map goes here</div>
    )
  }
}

export default withRouter(BenchMap);