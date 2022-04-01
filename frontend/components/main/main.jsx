import React from "react";
import NavBarContainer from "../nav-bar/navbar_container";
import DeliveryContainer from "../map/delivery_container";
import { withRouter } from "react-router-dom";
import { Fragment } from "react";

function routeCheck(pathname) {
  const routes = ["/delivery", "/orderhistory", "/restaurants", "/pickup"];
  for (let route of routes) {
    if (pathname.startsWith(route)) {
      return false
    }
  }
  return true
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  delivery() {
    if (routeCheck(this.props.location.pathname)) {
      return <DeliveryContainer />
    }
  }

  // The main component only contains the nav bar. This is present on every
  // page, but the main content is dynamic.
  render() {
    return (
      <Fragment>
        <NavBarContainer />
        {this.delivery()}
      </Fragment>
    )
  }
}

export default withRouter(Main);