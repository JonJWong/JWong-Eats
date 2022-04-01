import React from "react";
import NavBarContainer from "../nav-bar/navbar_container";
import { withRouter } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  // The main component only contains the nav bar. This is present on every
  // page, but the main content is dynamic.
  render() {
    return (
      <NavBarContainer />
    )
  }
}

export default withRouter(Main);