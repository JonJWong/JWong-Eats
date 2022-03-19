import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <header>
        <h1>JWong Eats</h1>
        <GreetingContainer />
      </header>

      <AuthRoute exact path="/signup" component={SignupFormContainer}  />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
  )
}


export default App;