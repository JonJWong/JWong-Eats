import React from 'react';
import { Link } from 'react-router-dom';
import UserModalContainer from '../user_modal/user_modal_container';
import CartContainer from "../cart/cart_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      cartOpen: false,
      currentButton: "pickup"
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.cartButton = this.cartButton.bind(this);
    this.clickPickup = this.clickPickup.bind(this);
    this.clickDelivery = this.clickDelivery.bind(this);
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

  toggleCart() {
    let setValue = !this.state.cartOpen;
    this.setState({ cartOpen: setValue })
  }

  renderCart() {
    if (this.state.cartOpen) {
      return <CartContainer />
    }
  }

  cartButton() {
    if (this.props.location === "/splash") {
      console.log(this.props.location)
    }
  }

  clickPickup() {
    if (this.state.currentButton === "delivery") {
      this.setState({ currentButton: "pickup" })
    }
  }

  clickDelivery() {
    if (this.state.currentButton === "pickup") {
      this.setState({ currentButton: "delivery" })
    }
  }

  render() {
    return (
      <nav className="nav-bar">
        {this.cartButton()}
        <div className="nav-contents">
          <div className="left">
            <button onClick={() => this.toggleModal()} className="hamburger"><i className="fas fa-bars fa-xl"></i></button>
            <Link to="/" className="eats-logo" />
            <div className="method-slider">
              <Link
                to="/delivery"
                className={ this.state.currentButton === "delivery"
                  ? "delivery-button focused-button"
                  : "delivery-button" }
                onClick={() => this.clickDelivery()}>Delivery</Link>
              <Link
                to="/pickup"
                className={ this.state.currentButton === "pickup"
                  ? "pickup-button focused-button"
                  : "pickup-button" }
                onClick={() => this.clickPickup()}>Pickup</Link>
            </div>
              {/* Delivery Details/Address Modal button here */}
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
      </nav>
    )
  }
}

export default NavBar;