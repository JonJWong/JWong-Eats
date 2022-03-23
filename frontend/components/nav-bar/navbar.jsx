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
      cartOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
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
                className={ this.props.location.pathname === "/delivery"
                  ? "delivery-button focused-button"
                  : "delivery-button" }
                >Delivery</Link>
              <Link
                to="/pickup"
                className={ this.props.location.pathname === "/pickup"
                  ? "pickup-button focused-button"
                  : "pickup-button" }
                >Pickup</Link>
            </div>
            <div className="nav-address-info">
              <i className="fas fa-map-marker-alt"></i>{ this.props.location.pathname === "/delivery" ? "Union, NJ  •  now" : "Union, NJ  •  Pick up now"}
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
      </nav>
    )
  }
}

export default withRouter(NavBar);