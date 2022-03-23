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
    console.log(this.props)
    return (
      <div className="restaurant-page-container">
        Working
      </div>
    )
  }
}

export default RestaurantIndex;