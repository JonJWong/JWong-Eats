import React from "react";
import { Switch } from "react-router";
import SplashContainer from "./splash/splash_container";
import MainContainer from "./main/main_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import DeliveryContainer from "./map/delivery_container";
import PickupContainer from "./map/pickup_container";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
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
      <ProtectedRoute path="/" component={MainContainer} />
      <Switch>
        <ProtectedRoute exact path="/delivery" component={DeliveryContainer} />
        <ProtectedRoute exact path="/pickup" component={PickupContainer} />
        <ProtectedRoute path="/restaurants/:restaurantId" component={RestaurantIndexContainer} />
      </Switch>
    </div>
  )
}

export default App;