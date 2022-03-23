import React from "react";
import { withRouter } from "react-router-dom";

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId)
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