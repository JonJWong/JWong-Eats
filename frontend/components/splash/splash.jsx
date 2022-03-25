import React from "react";
import { Link } from "react-router-dom";
import SplashNavContainer from "./splash_nav_container"

const BACKGROUNDS = ['BG1.png', 'BG2.png', 'BG3.png', 'BG4.png'];

function randomBG() {
  return BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]
}

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt: false
    }

    this.signinPrompt = this.signinPrompt.bind(this);
    this.promptSignin = this.promptSignin.bind(this);
  }

  // pseudo-error when Find Food is clicked
  signinPrompt() {
    if (this.state.prompt) {
      return <div className="auth-errors">Please sign in first.</div>
    }
  }

  // helper method to toggle whether or not pseudo-error is displayed
  promptSignin() {
    this.setState({ prompt: true })
  }

  render() {
    const background_url = randomBG();

    return (
      <div id="splash">
        <SplashNavContainer />
        <div id="splash-body">
          <h1 id="splash-title">Order food to your door</h1>
          <div id="splash-fake-bar">
            <div id="splash-prefill-search">
              <i className="fas fa-map-marker-alt"></i> Union, NJ
            </div>
            <div id="splash-deliver">
              <i className="fas fa-clock"></i>
              <div id="splash-deliver-text">Deliver now </div>
              <i className="fas fa-angle-down"></i>
            </div>
            <button onClick={() => this.promptSignin()} id="splash-find-food">Find Food</button>
          </div>
          {this.signinPrompt()}
          <div id="splash-signin-prompt">
            <Link to="/login" id="splash-bottom-signin">
              Sign in</Link> to see restauraunts in the area.
          </div>
        </div>
      </div>
    )
  }
}

export default Splash