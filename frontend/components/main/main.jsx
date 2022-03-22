import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../nav-bar/navbar_container";

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main">
        <NavbarContainer />
        {/* <GreetingContainer /> */}
      </div>
    )
  }
}

export default Main