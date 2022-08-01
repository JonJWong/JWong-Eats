import React from 'react';
import { Link } from 'react-router-dom';
import UserModalContainer from '../user_modal/user_modal_container';

class SplashNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  };

  // Helper to open/close side modal
  toggleModal() {
    let setValue = !this.state.modalOpen;
    this.setState({ modalOpen: setValue })
  };

  // Eender modal if state is open
  renderModal() {
    if (this.state.modalOpen) {
      return <UserModalContainer toggleModal={this.toggleModal} />
    };
  };

  render() {
    return (
      <nav id="splash-nav-bar">

        <div id="splash-nav-contents">
          <div id="splash-left">
            <button
              onClick={() => this.toggleModal()}
              id="splash-hamburger">
                <i className="fas fa-bars fa-xl"></i>
            </button>

            <div id="splash-eats-logo" />
          </div>

          <div id="splash-right">
            <Link
              to="/login"
              id="splash-nav-login">
                Sign In
            </Link>
          </div>
        </div>
        
        {this.renderModal()}
      </nav>
    );
  };
};

export default SplashNav;