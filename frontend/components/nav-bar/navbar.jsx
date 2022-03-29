import React from 'react';
import { Link } from 'react-router-dom';
import UserModalContainer from '../user_modal/user_modal_container';
import CartContainer from "../cart/cart_container";
import MenuItemContainer from "../restaurant/menu_item_container";
import SearchModalContainer from "./search_modal_container";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      cartOpen: false,
      itemOpen: false,
      searchOpen: false,
      currentButton: "delivery",
      searchValue: ""
    }

    this.update = this.update.bind(this);
    this.openSearchModal = this.openSearchModal.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);
    this.cartNum = this.cartNum.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setButton = this.setButton.bind(this);
  }

  // helper to toggle state attributes to display modals
  toggle(attr) {
    let setValue = !this.state[attr];
    this.setState({ [attr]: setValue })
  }

  update(value) {
    return e => this.setState({ [value]: e.currentTarget.value.toLowerCase() })
  }

  // modal state helper-method
  renderModal() {
    if (this.state.modalOpen) {
      return <UserModalContainer
        toggleModal={this.toggle}
        className="modal-open" />
    }
  }

  // search modal open and close helpers
  openSearchModal() {
    const searchBar = document.querySelector(".nav-search-bar");
    searchBar.classList.add("search-expanded");
    this.setState({ searchOpen: true })
  }

  // this technically ends the search that is ongoing (state)
  closeSearchModal() {
    const searchBar = document.querySelector(".nav-search-bar");
    searchBar.classList.remove("search-expanded");
    this.setState({ searchOpen: false })
  }

  // helper to render search components if there is an ongoing search
  renderSearch() {
    if (this.state.searchOpen) {
      return <SearchModalContainer
        searchOpen={this.state.searchOpen}
        closeSearchModal={this.closeSearchModal}
        value={this.state.searchValue} />
    }
  }

  // cart state helper-method
  renderCart() {
    if (this.state.cartOpen) {
      return <CartContainer toggleCart={this.toggle} />
    }
  }

  // item state helper-method
  renderItem() {
    if (this.state.itemOpen) {
      return <MenuItemContainer value={this.state.searchValue} />
    }
  }

  // pickup-delivery toggle based on state, pathname
  setButton() {
    if (this.props.location.pathname === "/delivery"
      && this.state.currentButton === "pickup") {
        this.setState({ currentButton: "delivery" })
    }
    if (this.props.location.pathname === "/pickup"
      && this.state.currentButton === "delivery") {
        this.setState({ currentButton: "pickup" })
    }
  }

  // add quantity to cart button
  cartNum() {
    if (Object.keys(this.props.cart).length > 0) {
      return `(${Object.keys(this.props.cart).length})`
    }
  }

  render() {
    return (
      <nav id="nav-bar">

        <div id="nav-contents">

          <div id="nav-left">
            <button onClick={() => this.toggle('modalOpen')}
              className="hamburger">
                <i className="fas fa-bars fa-xl"></i>
            </button>

            <Link to={`/${this.state.currentButton}`} className="eats-logo" />

            <div id="method-slider">
              <Link
                to="/delivery"
                className={ this.state.currentButton === "delivery"
                  ? "delivery-button focused-button"
                  : "delivery-button" }
                >Delivery
              </Link>

              <Link
                to="/pickup"
                className={ this.state.currentButton === "pickup"
                  ? "pickup-button focused-button"
                  : "pickup-button" }
                >Pickup
              </Link>
            </div>

            <div id="nav-address-info">
              <i className="fas fa-map-marker-alt"></i>
                { this.state.currentButton === "delivery"
                  ? "Union, NJ  •  now"
                  : "Union, NJ  •  Pick up now"
                }
            </div>

            <div className="nav-search-bar">
              <i className="fas fa-search"></i>
              <input type='text'
                className="nav-search-area"
                placeholder="Search restaurants by name"
                onChange={this.update('searchValue')}
                onClick={() => this.openSearchModal()}
              />
            </div>

            <button onClick={() => this.toggle('cartOpen')}
              id="cart-button">
                <i className="fas fa-shopping-cart"></i>Cart {this.cartNum()}
            </button>
          </div>


        </div>
        {this.renderSearch()}
        {this.renderModal()}
        {this.renderCart()}
        {this.setButton()}
      </nav>
    )
  }
}

export default withRouter(NavBar);