import React from "react";
import { withRouter } from "react-router-dom";

// Circle marker params
const LIGHT_CIRCLE = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 15,
  fillColor: "#FFFFFF",
  strokeColor: "#FFFFFF",
  fillOpacity: 1.0,
  strokeWeight: 0.4
}

// Dark circle marker params
const DARK_CIRCLE = {
  path: google.maps.SymbolPath.CIRCLE,
  scale: 15,
  fillColor: "#000000",
  strokeColor: "#000000",
  fillOpacity: 1.0,
  strokeWeight: 0.4
}

// Map options for controls
const MAP_OPTIONS = {
  center: { lat: 40.6962131, lng: -74.302344 }, // Union, NJ
  zoom: 15,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false
};

// Maps query params
const REQUEST = {
  location: MAP_OPTIONS.center,
  radius: 5000, // meters
  type: ['restaurant']
}

// Map styling to hide default pois
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

class PickupMap extends React.Component{
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

  // Helper method for map API to create map markers.
  createMarker(place) {
    const map = this.map;

    // Create a new maker on the map per location
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

    // Add markers to component attributes
    this.markers.push(marker);

    // Sets marker content
    const infoWindowContent = 
    `<div class="marker-content">` +

      `<img src="${place.photos[0].getUrl()}"
        alt="restaurant-photo" class="infowindow-photo"></img>` +

      `<h3 class="infowindow-title">${place.name}</h3>` +

      `<span class="infowindow-rating">Rating: ${place.rating}</span>` +
      `<span class="infowindow-reviewcount">

        Reviews: ${place.user_ratings_total}</span>` +
        
      `<span class="infowindow-price">Price: ${'$'.repeat(place.price_level)}`+
    `</div>`;

    // Sets info window for the marker
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      maxWidth: 250
    })

    // Add infoWindows to component attributes
    this.infoWindows.push(infoWindow);

    const that = this;

    // Opens info window on click, closes all other open info windows
    marker.addListener("click", () => {
      that.closeInfoWindows();
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false
      })
    })

    // Darkens circle on hover
    marker.addListener("mouseover", () => {
      const label = marker.getLabel();
      label.color = "white"
      marker.setLabel(label);

      marker.setIcon(DARK_CIRCLE);
    })

    // Lightens circle when mouse not over
    marker.addListener("mouseout", () => {
      const label = marker.getLabel();
      label.color = "black";
      marker.setLabel(label);

      marker.setIcon(LIGHT_CIRCLE)
    })
  }

  // Helper method to close other info windows.
  // We only want one open at a time
  closeInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  // Helper callback for the nearbySearch function
  mapCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i])
      }
    }
  }

  // Set up map when component mounts;
  componentDidMount() {
    this.props.fetchRestaurants();
    // Wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, MAP_OPTIONS);
    this.map.setOptions({ styles: STYLES["hide"] });
    // Initialize places service
    this.service = new google.maps.places.PlacesService(this.map);

    // Populate map with markers
    this.service.nearbySearch(REQUEST, this.mapCallback);
  }

  // Remove map, service, attributes when component unmounts
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

import { connect } from 'react-redux';
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
  return {
    restaurants: state.entities.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: category => dispatch(fetchRestaurants(category)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PickupMap));