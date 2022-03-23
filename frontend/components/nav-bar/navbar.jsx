import React from 'react';
import { Link } from 'react-router-dom';
import UserModalContainer from '../user_modal/user_modal_container';
import CartContainer from "../cart/cart_container";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      cartOpen: false,
      currentButton: "delivery"
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.setButton = this.setButton.bind(this);
  }


  // modal state helper-methods
  toggleModal() {
    let setValue = !this.state.modalOpen;
    this.setState({ modalOpen: setValue })
  }

  renderModal() {
    if (this.state.modalOpen) {
      return <UserModalContainer toggleModal={this.toggleModal} />
    }
  }

  // cart state helper-methods
  toggleCart() {
    let setValue = !this.state.cartOpen;
    this.setState({ cartOpen: setValue })
  }

  renderCart() {
    if (this.state.cartOpen) {
      return <CartContainer />
    }
  }

  // pickup-delivery toggle
  setButton() {
    if (this.props.location.pathname === "/delivery" && this.state.currentButton === "pickup") {
      this.setState({ currentButton: "delivery" })
    }
    if (this.props.location.pathname === "/pickup" && this.state.currentButton === "delivery") {
      this.setState({ currentButton: "pickup" })
    }
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-contents">
          <div className="left">
            <button onClick={() => this.toggleModal()} className="hamburger"><i className="fas fa-bars fa-xl"></i></button>
            <Link to="/pickup" className="eats-logo" />
            <div className="method-slider">
              <Link
                to="/delivery"
                className={ this.state.currentButton === "delivery"
                  ? "delivery-button focused-button"
                  : "delivery-button" }
                >Delivery</Link>
              <Link
                to="/pickup"
                className={ this.state.currentButton === "pickup"
                  ? "pickup-button focused-button"
                  : "pickup-button" }
                >Pickup</Link>
            </div>
            <div className="nav-address-info">
              <i className="fas fa-map-marker-alt"></i>{ this.state.currentButton === "delivery" ? "Union, NJ  •  now" : "Union, NJ  •  Pick up now"}
            </div>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type='text' className="search-area" placeholder="Food, groceries, drinks, etc" />
          </div>
          </div>
          <div className="right">
            <button onClick={() => this.toggleCart()} className="cart-button"><i className="fas fa-shopping-cart"></i>Cart</button>
          </div>
        </div>
        {this.renderModal()}
        {this.renderCart()}
        {this.setButton()}
      </nav>
    )
  }
}

export default withRouter(NavBar);