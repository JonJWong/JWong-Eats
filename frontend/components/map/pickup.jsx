import React from "react";
import PickupMap from "./pickup_map";

class Pickup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span className="pickup-container">
        <span className="pickup-title">Pickup Nearby</span>
        <PickupMap />
      </span>
    )
  }
}

export default Pickup;