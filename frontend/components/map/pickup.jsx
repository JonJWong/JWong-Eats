import React from "react";
import PickupMap from "./pickup_map";

function addZero(num) {
  if (num % 1 === 0) {
    return `${num}` + `.0`
  }
  return num
}

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
            <div className="pickup-restaurant-list">
              {Object.keys(restaurants).map(id => {
                return (
                  <div 
                    className="restaurant-container"
                    key={id}>
                      <div className="restaurant-image"></div>
                      <div className="restaurant-bottom">
                        <h5 className="restaurant-name">
                          {restaurants[id].name}
                        </h5>
                        <div className="restaurant-price">
                          Price: {restaurants[id].price_rating}
                        </div>
                        <div className="restaurant-hours">
                          Hours: {restaurants[id].hours}
                        </div>
                        <div className="restaurant-rating">
                          {addZero(restaurants[id].rating)}
                        </div>
                        <div className="restaurant-reviewcount">
                          Reviews: {restaurants[id].review_count}
                        </div>
                      </div>
                  </div>
                )
              })}
            </div>
          </div>
        <PickupMap />
      </div>
    )
  }
}

export default Pickup;