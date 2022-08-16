import React from "react";
import { Link } from "react-router-dom";
import UserModalContainer from "../user_modal/user_modal_container";

class SplashNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  // Helper to open/close side modal
  toggleModal() {
    let setValue = !this.state.modalOpen;
    this.setState({ modalOpen: setValue });
  }

  // Eender modal if state is open
  renderModal() {
    if (this.state.modalOpen) {
      return <UserModalContainer toggleModal={this.toggleModal} />;
    }
  }

  render() {
    return (
      <nav className="splash-nav">
        <section>
          <div className="left">
            <button onClick={() => this.toggleModal()}>
              <i className="fas fa-bars fa-xl"></i>
            </button>

            <div className="splash-logo" />
          </div>

          <div className="right">
            <Link to="/login">Sign In</Link>
          </div>
        </section>

        {this.renderModal()}
      </nav>
    );
  }
}

export default SplashNav;
