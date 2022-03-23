import React from "react";
import PickupMap from "./pickup_map";

class Pickup extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    const { restaurants, fetchRestaurant } = this.props;
    console.log(restaurants);
    return (
      <div className="pickup-container">
        <div className="pickup-restaurants">
          <div className="pickup-title">Pickup Nearby</div>
          {Object.keys(restaurants).map(id => {
            return (
              <div 
                className="restaurant-container"
                key={id}
                fetchRestaurant={fetchRestaurant}>
                  <div className="restaurant-name">
                    {restaurants[id].name}
                  </div>
                  <div className="restaurant-rating">
                    {restaurants[id].rating}
                  </div>
              </div>
            )
          })}
        </div>
        <PickupMap />
      </div>
    )
  }
}

export default Pickup;