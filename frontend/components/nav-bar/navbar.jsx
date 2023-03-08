import React from "react";
import { Link } from "react-router-dom";
import UserModalContainer from "../user_modal/user_modal_container";
import CartContainer from "../cart/cart_container";
import MenuItemContainer from "../restaurant/menu_item_container";
import SearchModalContainer from "./search_modal_container";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      cartOpen: false,
      itemOpen: false,
      searchOpen: false,
      currentButton: "delivery",
      searchValue: "",
    };

    this.update = this.update.bind(this);
    this.openSearchModal = this.openSearchModal.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);
    this.cartNum = this.cartNum.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setButton = this.setButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants().then((action) => {
      this.setState({
        restaurants: action.restaurants,
      });
    });
  }

  // Helper to toggle state attributes to display modals
  toggle(attr) {
    let setValue = !this.state[attr];
    this.setState({ [attr]: setValue });
  }

  // Helper to set search field.
  update(value) {
    return (e) =>
      this.setState({ [value]: e.currentTarget.value.toLowerCase() });
  }

  // Modal state helper-method
  renderModal() {
    if (this.state.modalOpen) {
      return (
        <UserModalContainer toggleModal={this.toggle} className="modal-open" />
      );
    }
  }

  // Search modal open and close helpers
  openSearchModal() {
    const searchBar = document.querySelector(".nav-search");
    searchBar.classList.add("search-expanded");
    this.setState({ searchOpen: true });
  }

  // This technically ends the search that is ongoing (state)
  closeSearchModal() {
    const searchBar = document.querySelector(".nav-search");
    searchBar.classList.remove("search-expanded");
    this.setState({ searchOpen: false });
  }

  // Helper to render search components if there is an ongoing search
  renderSearch() {
    if (this.state.searchOpen) {
      return (
        <SearchModalContainer
          restaurants={this.state.restaurants}
          searchOpen={this.state.searchOpen}
          closeSearchModal={this.closeSearchModal}
          value={this.state.searchValue}
        />
      );
    }
  }

  // Cart state helper-method
  renderCart() {
    if (this.state.cartOpen) {
      return <CartContainer toggleCart={this.toggle} />;
    }
  }

  // Item state helper-method
  renderItem() {
    if (this.state.itemOpen) {
      return <MenuItemContainer value={this.state.searchValue} />;
    }
  }

  // Pickup-delivery toggle based on state, pathname
  setButton() {
    if (
      this.props.location.pathname === "/delivery" &&
      this.state.currentButton === "pickup"
    ) {
      this.setState({ currentButton: "delivery" });
    }
    if (
      this.props.location.pathname === "/pickup" &&
      this.state.currentButton === "delivery"
    ) {
      this.setState({ currentButton: "pickup" });
    }
  }

  // Add quantity to cart button
  cartNum() {
    let sum = 0;
    Object.values(this.props.cart).forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  }

  render() {
    return (
      <nav className="main-nav">
        <div>
          <section className="nav-left">
            <button
              onClick={() => this.toggle("modalOpen")}
              className="hamburger"
            >
              <i className="fas fa-bars fa-xl"></i>
            </button>

            <Link to={`/${this.state.currentButton}`} className="eats-logo" />

            <span className="nav-rounded">
              <Link
                to="/delivery"
                className={
                  this.state.currentButton === "delivery"
                    ? "delivery-button focused-button"
                    : "delivery-button"
                }
              >
                Delivery
              </Link>

              <Link
                to="/pickup"
                className={
                  this.state.currentButton === "pickup"
                    ? "pickup-button focused-button"
                    : "pickup-button"
                }
              >
                Pickup
              </Link>
            </span>

            <p>
              <i className="fas fa-map-marker-alt"></i>
              {this.state.currentButton === "delivery"
                ? "Union, NJ  •  now"
                : "Union, NJ  •  Pick up now"}
            </p>

            <div className="nav-search nav-rounded">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search restaurants by name"
                onChange={this.update("searchValue")}
                onClick={() => this.openSearchModal()}
              />
            </div>

            <button
              onClick={() => this.toggle("cartOpen")}
              className="cart-button"
            >
              <i className="fas fa-shopping-cart"></i>Cart {this.cartNum()}
            </button>
          </section>
        </div>
        {this.renderSearch()}
        {this.renderModal()}
        {this.renderCart()}
        {this.setButton()}
      </nav>
    );
  }
}

export default withRouter(NavBar);
