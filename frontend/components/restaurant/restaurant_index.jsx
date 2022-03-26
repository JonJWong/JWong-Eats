import React from "react";
import * as Util from "../../util/util";
import MenuItemContainer from "./menu_item_container";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      itemOpen: false
    }

    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.renderItemModal = this.renderItemModal.bind(this);
    this.toggleItemModal = this.toggleItemModal.bind(this);
  }

  // get restaurant, and knock loading screen off after mount and fetch
  componentDidMount() {
    const id = this.props.match.params.restaurantId
    this.props.fetchRestaurant(id)
      .then(() => this.setState({ loading: false }))
  }

  // fetch restaurant if url changes on refresh
  componentDidUpdate(prevProps) {
    const { restaurant, fetchRestaurant } = this.props;
    const id = restaurant.id;

    if (this.props.location.pathname !== prevProps.location.pathname) {
      fetchRestaurant(id)
    }
  }

  // change state to render modal
  toggleItemModal(item) {
    const newValue = !this.state.itemOpen;
    this.setState({ itemOpen: newValue, clickedItem: item })
  }

  // if state is open, render modal
  renderItemModal() {
    if (this.state.itemOpen) {
      return <MenuItemContainer
        item={this.state.clickedItem}
        toggleItemModal={this.toggleItemModal} />
    }
  }

  // if the item has an image, render the container with the image
  // otherwise, render the container with no image and different styling
  renderMenuItem(item, id) {
    if (item.photoUrl) {
      return (
        <div className="menu-item-container"
          key={id}
          onClick={() => this.toggleItemModal(item)}>

          <div className="menu-item-info">
            {/* <img src={item.photoUrl} className="menu-item-photo"></img> */}
            <div className="menu-item-name">{item.item_name}</div>
            <div className="menu-item-price">${item.item_price.toFixed(2)}</div>
            <div className="menu-item-description">{item.description}</div>
          </div>

            <button 
              className="menu-open-item"
              onClick={() => this.toggleItemModal(item)}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
      )
    } else {
      return (
      <div className="menu-item-container"
        key={id}
        onClick={() => this.toggleItemModal(item)}>

          <button 
            className="menu-open-item"
            onClick={() => this.toggleItemModal(item)}>
              <i className="fa-solid fa-plus"></i>
          </button>

        <div className="menu-item-info">
          <div className="menu-item-name">{item.item_name}</div>
          <div className="menu-item-price">${item.item_price.toFixed(2)}</div>
          <div className="menu-item-description">{item.description}</div>
        </div>
      </div>
      )
    }
  }

  render() {
    // render loading screen if component has not loaded yet
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      )
    }

    // deconstruct props and take restaurant object
    const { restaurant } = this.props;
    // set document title to restaurant info
    document.title = `Order ${restaurant.name} (${restaurant.address})`

    // set variables to clean syntax below
    const menu = restaurant.menu;
    const timePrompt = Util.timeDifferencePrompt(restaurant.hours)

    return (
      <div className="restaurant-page-container">
        <img src={restaurant.photoUrl} className="restaurant-banner" />

        <div className="restaurant-info">
          <div className="restaurant-page-name">{restaurant.name}</div>
          <div className="restaurant-small">
            <i className="fas fa-star"></i> {Util.addZero(restaurant.rating)} ({restaurant.review_count} Ratings) • {restaurant.price_rating} • {timePrompt}
          </div>
        </div>

        <div className="menu-items-wrapper">
          <div className="menu-items-list">
            {Object.keys(menu).map(id => {
              const item = menu[id];
              return (
                this.renderMenuItem(item, id)
              )})}
          </div>
        </div>

        {this.renderItemModal()}
      </div>
    )
  }
}

export default RestaurantIndex;