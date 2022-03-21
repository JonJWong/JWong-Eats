import React from "react";
import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import UserModalContainer from "./user_modal/user_modal_container";
import UserAccountContainer from "./user_account/user_account_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <Route path="/" component={SplashContainer} />
      {/* <Route exact path="/cart" component={CartContainer} />
      <Route exact path="/pickup" component={PickupContainer} />
      <Route exact path="/delivery" component={DeliveryContainer} /> */}
      {/* <Route exact path="/account" component={UserAccountContainer} />
      <Route exact path="/modal" component={UserModalContainer} /> */}
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
  )
}

export default App;