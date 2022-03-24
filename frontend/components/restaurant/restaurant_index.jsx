import React from "react";
import * as Util from "../../util/util";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const id = this.props.match.params.restaurantId
    this.props.fetchRestaurant(id)
      .then(() => this.setState({ loading: false }))
  }

  componentDidUpdate(prevProps) {
    const { restaurant, fetchRestaurant } = this.props;
    const id = restaurant.id;

    if (this.props.location.pathname !== prevProps.location.pathname) {
      fetchRestaurant(id)
    }
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      )
    }
    const { restaurant } = this.props;
    const menu = restaurant.menu;
    const timePrompt = Util.timeDifferencePrompt(restaurant.hours)

    return (
      <div className="restaurant-page-container">
        <div className="restaurant-banner"></div>
        <div className="restaurant-info">
          <div className="restaurant-page-name">{restaurant.name}</div>
          <div className="restaurant-small">
          <i className="fas fa-star"></i> ({Util.addZero(restaurant.rating)} Ratings) • {restaurant.price_rating} • {timePrompt}
          </div>
        </div>
        <div className="menu-items-wrapper">
          <div className="menu-items-list">
            {Object.keys(menu).map(id => {
              const item = menu[id];
              return (
                <div className="menu-item-container" key={id}>
                  <div className="menu-item-info">
                    <div className="menu-item-photo"></div>
                    <div className="menu-item-name">{item.item_name}</div>
                    <div className="menu-item-price">${item.item_price}</div>
                    <div className="menu-item-description">{item.description}</div>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantIndex;