import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};



const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Redirect to="/pickup" /> : <Component {...props} />
      }
    />
  )
}


const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/splash" />
      }
    />
  )
}

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));