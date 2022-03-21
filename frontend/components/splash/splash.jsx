import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "../greeting/greeting_container";
import NavbarContainer from "../nav-bar/navbar_container";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash">
        <NavbarContainer />
        {/* <GreetingContainer /> */}
      </div>
    )
  }
}

export default Splash