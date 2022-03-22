import React from "react";
import { Switch } from "react-router";
import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PickupContainer from "./map/pickup_container";
import Main from "./main/main";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <ProtectedRoute exact path="/pickup" component={PickupContainer} />
      <ProtectedRoute exact path="/" component={Main} />
      <Route exact path="/splash" component={SplashContainer} />
      {/* <Route path="/" component={SplashContainer} /> */}
      {/* <Route exact path="/cart" component={CartContainer} /> */}
      {/* <Route exact path="/delivery" component={DeliveryContainer} /> */}
      {/* <Route exact path="/account" component={UserAccountContainer} />
      <Route exact path="/modal" component={UserModalContainer} /> */}
    </div>
  )
}

export default App;