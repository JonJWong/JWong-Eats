import React from "react";
import PickupMap from "./pickup_map";

class Pickup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="pickup-container">
        <h3 className="pickup-title">Pickup Nearby</h3>
        <PickupMap />
      </div>
    )
  }
}

export default Pickup;