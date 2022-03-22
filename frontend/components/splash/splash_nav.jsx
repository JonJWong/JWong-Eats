import React from 'react';
import { Link } from 'react-router-dom';
import UserModalContainer from '../user_modal/user_modal_container';

class SplashNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  toggleModal() {
    let setValue = !this.state.modalOpen;
    this.setState({ modalOpen: setValue })
  }

  renderModal() {
    if (this.state.modalOpen) {
      return <UserModalContainer toggleModal={this.toggleModal} />
    }
  }

  render() {
    return (
      <nav className="splash-nav-bar">
        <div className="splash-nav-contents">
          <div className="left">
            <button onClick={() => this.toggleModal()} className="hamburger"><i className="fas fa-bars fa-xl"></i></button>
            <div className="eats-logo" />
          </div>
          <div className="right">
            <Link to="/login" className="splash-nav-login">Sign In</Link>
          </div>
        </div>
        {this.renderModal()}
      </nav>
    )
  }
}

export default SplashNav;