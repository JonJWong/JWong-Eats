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
  }

  render() {
    const background_url = randomBG();

    return (
      <div className="splash">
        <SplashNavContainer />
        <div className="splash-body">
          <h1 className="splash-title">Order food to your door</h1>
          <p className="splash-prefill-search">
            <i class="fas fa-map-marker-alt"></i> Union, NJ
          </p>
          <div className="splash-signin-prompt">Sign in to see restauraunts in the area.</div>
        </div>
      </div>
    )
  }
}

export default Splash