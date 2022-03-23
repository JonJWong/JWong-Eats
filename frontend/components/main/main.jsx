import React from "react";
import NavBarContainer from "../nav-bar/navbar_container";
import PickupContainer from "../map/pickup_container";
import DeliveryContainer from "../map/delivery_container";
import { withRouter } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props)

    // this.whichContainer = this.whichContainer.bind(this);
  }

  // whichContainer() {
  //   if (this.props.location.pathname === "/pickup") {
  //     return <PickupContainer />
  //   } else {
  //     return <DeliveryContainer />
  //   }
  // }

  render() {
    return (
      <div className="main-div">
        <NavBarContainer />
        {/* {this.whichContainer()} */}
      </div>
    )
  }
}

export default withRouter(Main);