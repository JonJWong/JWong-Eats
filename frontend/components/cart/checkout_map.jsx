import React from "react";

// Map options for controls
const MAP_OPTIONS = {
  center: { lat: 40.6962131, lng: -74.302344 }, // Union, NJ
  zoom: 15,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false
};

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

class CheckoutMap extends React.Component {
  constructor(props) {
    super(props);

    this.map;
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, MAP_OPTIONS);
    this.map.setOptions({ styles: STYLES["hide"] });
  }

  render() {
    return (
      <div ref={map => this.mapNode = map } id="checkout-map-container">
      </div>
    )
  }
}

export default CheckoutMap;