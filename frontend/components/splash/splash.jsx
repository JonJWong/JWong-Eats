import React from "react";
import { Link } from "react-router-dom";
import SplashNavContainer from "./splash_nav_container";

const BG_IMG_URLS = [
  "https://jwong-eats-seeds.s3.amazonaws.com/BG1.png",
  "https://jwong-eats-seeds.s3.amazonaws.com/BG2.png",
  "https://jwong-eats-seeds.s3.amazonaws.com/BG3.png",
  "https://jwong-eats-seeds.s3.amazonaws.com/BG4.png",
];

function randomUrl() {
  return BG_IMG_URLS[Math.floor(Math.random() * BG_IMG_URLS.length)];
}

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: false,
    };

    this.signinPrompt = this.signinPrompt.bind(this);
    this.promptSignin = this.promptSignin.bind(this);
  }

  // Pseudo-error when Find Food is clicked
  signinPrompt() {
    if (this.state.prompt) {
      return <div className="auth-errors">Please sign in first.</div>;
    }
  }

  // Helper method to toggle whether or not pseudo-error is displayed
  promptSignin() {
    this.setState({ prompt: true });
  }

  render() {
    return (
      <div
        className="splash"
        style={{ backgroundImage: `url(${randomUrl()})` }}
      >
        <SplashNavContainer />

        <section>
          <h1>Order food to your door</h1>

          <div className="fake-bar">
            <p>
              <i className="fas fa-map-marker-alt"></i> Union, NJ
            </p>

            <span>
              <i className="fas fa-clock"></i>
              <div>Deliver now </div>
              <i className="fas fa-angle-down"></i>
            </span>

            <button onClick={() => this.promptSignin()}>Find Food</button>
          </div>

          {this.signinPrompt()}
          <div className="splash-prompt">
            <Link to="/login">Sign in </Link> to see restauraunts in the area.
          </div>
        </section>

        <article>
          <div className="splash-fill github">
            <a
              href="https://github.com/JonJWong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://jwong-eats-seeds.s3.amazonaws.com/github.png"
                className="splash-logo"
                alt="github-logo"
              />
            </a>
          </div>

          <div className="splash-fill linkedin">
            <a
              href="https://www.linkedin.com/in/jonjwong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://jwong-eats-seeds.s3.amazonaws.com/linkedin.png"
                className="splash-logo"
                alt="splash-linkedin-logo"
              />
            </a>
          </div>

          <div className="splash-fill angel">
            <a
              href="https://angel.co/u/jonathan-wong-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://jwong-eats-seeds.s3.amazonaws.com/angellist.png"
                className="splash-logo angel-logo"
                alt="splash-angellist-logo"
              />
            </a>
          </div>
        </article>

        <footer>
          Note: Images on this site are property of their respective companies
          (Uber/UberEats, Red Lobster, Olive Garden). This site is for personal
          use only, and is in no way to be used for profit or gain. Copyright
          Disclaimer under Section 107 of the copyright act 1976, allowance is
          made for fair use for purposes such as criticism, comment, news
          reporting, scholarship, and research. Fair use is a use permitted by
          copyright statute that might otherwise be infringing. Non-profit,
          educational or personal use tips the balance in favour of fair use.
        </footer>
      </div>
    );
  }
}

export default Splash;
