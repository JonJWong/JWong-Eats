import React from 'react';
import { Link } from 'react-router-dom';
import UserModalContainer from '../user_modal/user_modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.toggle = this.toggle.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  toggle() {
    let setValue = !this.state.modalOpen;
    this.setState({ modalOpen: setValue })
  }

  renderModal() {
    if (this.state.modalOpen) {
      return <UserModalContainer modalOpen={this.state.modalOpen} />
    }
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-contents">
          <div className="left">
            <button onClick={() => this.toggle()} className="hamburger">Hamburger</button>
            <Link to="/" className="eats-logo" />
            <div className="method-slider">
              {/* <Link className="delivery-button">Delivery</Link>
              <Link className="pickup-button">Pickup</Link> */}
            </div>
              {/* Delivery Details/Address Modal button here */}
              {/* Search Bar would go here. */}
          </div>
          <div className="right">
            <Link className="cart-button">Cart</Link>
          </div>
        </div>
        {this.renderModal()}
      </nav>
    )
  }
}

export default NavBar;