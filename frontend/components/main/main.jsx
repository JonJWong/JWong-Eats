import React from "react";
import NavBarContainer from "../nav-bar/navbar_container";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { clearSessionErrors } from "../../actions/session_actions";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  // The main component only contains the nav bar. This is present on every
  // page, but the main content is dynamic.
  render() {
    return <NavBarContainer />;
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(withRouter(mapStateToProps, mapDispatchToProps))(Main);
