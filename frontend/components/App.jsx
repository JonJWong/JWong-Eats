import React from "react";
import { Switch } from "react-router";

import SplashContainer from "./splash/splash_container";
import Main from "./main/main";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Delivery from "./map/delivery";
import Pickup from "./map/pickup";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import OrderHistoryContainer from "./user_account/order_history_container";
import Checkout from "./cart/checkout";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/splash" component={SplashContainer} />
        <AuthRoute path="/" component={SplashContainer} />
      </Switch>

      <ProtectedRoute path="/" component={Main}>
        <Delivery />
      </ProtectedRoute>

      <Switch>
        <ProtectedRoute exact path="/delivery" component={Delivery} />
        <ProtectedRoute exact path="/pickup" component={Pickup} />
        <ProtectedRoute
          path="/orderhistory/:id"
          component={OrderHistoryContainer}
        />
        <ProtectedRoute
          path="/restaurants/:restaurantId"
          component={RestaurantIndexContainer}
        />
        <ProtectedRoute path="/checkout/:id" component={Checkout} />
      </Switch>
    </div>
  );
};

export default App;
