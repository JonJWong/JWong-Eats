import React from "react";
import NavBarContainer from "../nav-bar/navbar_container";
import PickupContainer from "../map/pickup_container";
import DeliveryContainer from "../map/delivery_container";
import { withRouter } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavBarContainer />
    )
  }
}

export default withRouter(Main);