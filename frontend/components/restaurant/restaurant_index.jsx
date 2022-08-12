import React from "react";
import * as Util from "../../util/util";
import MenuItemContainer from "./menu_item_container";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      itemOpen: false,
    };

    this.openButtonContents = this.openButtonContents.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.renderItemModal = this.renderItemModal.bind(this);
    this.toggleItemModal = this.toggleItemModal.bind(this);
  }

  // Get restaurant, and knock loading screen off after mount and fetch
  componentDidMount() {
    const id = this.props.match.params.restaurantId;
    this.props.fetchRestaurant(id).then((action) =>
      this.setState({
        loading: false,
        restaurant: action.restaurant,
      })
    );
  }

  // Fetch restaurant if url changes on refresh
  componentDidUpdate(prevProps) {
    const { restaurant, fetchRestaurant } = this.props;
    const id = restaurant.id;

    if (this.props.location.pathname !== prevProps.location.pathname) {
      fetchRestaurant(id).then((action) => {
        this.setState({ restaurant: action.restaurant });
      });
    }
  }

  // Change state to render modal
  toggleItemModal(item) {
    const newValue = !this.state.itemOpen;
    this.setState({ itemOpen: newValue, clickedItem: item });
  }

  // Uf state is open, render modal
  renderItemModal() {
    if (this.state.itemOpen) {
      return (
        <MenuItemContainer
          item={this.state.clickedItem}
          toggleItemModal={this.toggleItemModal}
        />
      );
    }
  }

  // Set button to either + or item quantity
  openButtonContents(id) {
    const { cart } = this.props;
    if (cart) {
      if (Object.keys(cart).includes(id)) {
        return `${cart[id].quantity}`;
      } else {
        return <i className="fa-solid fa-plus"></i>;
      }
    }
  }

  // If the item has an image, render the container with the image
  // Otherwise, render the container with no image and different styling
  renderMenuItem(item, id) {
    if (item.photoUrl) {
      return (
        <li key={id} onClick={() => this.toggleItemModal(item)}>
          <button onClick={() => this.toggleItemModal(item)}>
            {this.openButtonContents(id)}
          </button>

          <section>
            <div className="menu-item-photo-wrapper">
              <img src={item.photoUrl}></img>
            </div>
            <h3>{item.item_name}</h3>
            <span>${parseFloat(item.item_price).toFixed(2)}</span>
            <article>{item.description}</article>
          </section>
        </li>
      );
    } else {
      return (
        <li key={id} onClick={() => this.toggleItemModal(item)}>
          <button onClick={() => this.toggleItemModal(item)}>
            {this.openButtonContents(id)}
          </button>

          <section>
            <h3>{item.item_name}</h3>
            <span>${parseFloat(item.item_price).toFixed(2)}</span>
            <article>{item.description}</article>
          </section>
        </li>
      );
    }
  }

  // Helper to adjust restaurant description to not have hyphens for display.
  renderDescription(description) {
    let words = description.split(" ");
    words = words.map((word) => {
      let split = word.split("-");
      if (split.length > 1) {
        return split.join(" ");
      } else {
        return word;
      }
    });
    return words.join(", ");
  }

  render() {
    // Render loading screen if component has not loaded yet
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      );
    }
    // Deconstruct props and take restaurant object
    const restaurant = this.state.restaurant;
    // Set document title to restaurant info
    document.title = `Order ${restaurant.name} (${restaurant.address})`;

    // Set variables to clean syntax below
    const menu = restaurant.menu;
    const timePrompt = Util.timeDifferencePrompt(restaurant.hours);

    return (
      <div className="restaurant">
        <img src={restaurant.photoUrl} />

        <section>
          <h2>{restaurant.name}</h2>
          <p>
            <p>{this.renderDescription(restaurant.description)}</p>
            <i className="fas fa-star"></i> {restaurant.rating.toFixed(1)} (
            {restaurant.review_count} Ratings) • {restaurant.price_rating} •{" "}
            {timePrompt}
          </p>
        </section>

        <div className="menu-items-wrapper">
          <ul>
            {Object.keys(menu).map((id) => {
              const item = menu[id];
              return this.renderMenuItem(item, id);
            })}
          </ul>
        </div>

        {this.renderItemModal()}
      </div>
    );
  }
}

export default RestaurantIndex;
