import React from "react";
import { withRouter } from "react-router-dom";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.restaurant;
  }

  componentDidMount() {
    const id = this.props.match.params.restaurantId
    || this.props.match.params.restaurant.id;
    this.props.fetchRestaurant(id);
  }

  render() {
    return (
      <div className="restaurant-page-container">
        <div className="restaurant-banner"></div>
        <div className="restaurant-info">
          <div className="restaurant-title"></div>
        </div>
      </div>
    )
  }
}

export default RestaurantIndex;