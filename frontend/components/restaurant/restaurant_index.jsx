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
    const hours = restaurant.hours;

    return (
      <div className="restaurant-page-container">
        <div className="restaurant-banner"></div>
        <div className="restaurant-info">
          <div className="restaurant-name">{restaurant.name}</div>
          <div className="restaurant-small">
          <i className="fas fa-star"></i> ({Util.addZero(restaurant.rating)} Ratings) • 
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantIndex;