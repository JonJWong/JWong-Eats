import React from "react";
import { Switch } from "react-router";
import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import DeliveryContainer from "./map/delivery_container";
import PickupContainer from "./map/pickup_container";
import Nav from "./nav-bar/navbar_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute path="/" component={SplashContainer} />
      </Switch>
      <ProtectedRoute path="/" component={Nav} />
      <ProtectedRoute exact path="/delivery" component={DeliveryContainer} />
      <ProtectedRoute exact path="/pickup" component={PickupContainer} />
      {/* <Route path="/" component={SplashContainer} /> */}
      {/* <Route exact path="/cart" component={CartContainer} /> */}
      {/* <Route exact path="/account" component={UserAccountContainer} />
      <Route exact path="/modal" component={UserModalContainer} /> */}
    </div>
  )
}

export default App;