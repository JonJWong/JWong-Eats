import React from "react";
import PickupMap from "./pickup_map";
import { Link } from "react-router-dom";
import * as Util from "../../util/util";

import { connect } from "react-redux";
import {
  fetchRestaurant,
  fetchRestaurants,
} from "../../actions/restaurant_actions";

class Pickup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
    document.title = "Order Food Online | JWongEats";
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div id="pickup-container">
        <div id="pickup-restaurants">
          <div id="pickup-title">Pickup Nearby</div>
          <div id="pickup-restaurant-list">
            {Object.keys(restaurants).map((id) => {
              return (
                <Link key={id} to={`/restaurants/${id}`}>
                  <div className="restaurant-container" key={id}>
                    <img
                      src={restaurants[id].photoUrl}
                      className="restaurant-image"
                    />

                    <div className="restaurant-bottom">
                      <h5 className="restaurant-name">
                        {restaurants[id].name}
                      </h5>

                      <div className="restaurant-price">
                        Price: {restaurants[id].price_rating}
                      </div>

                      <div className="restaurant-hours">
                        {Util.timeDifferencePrompt(restaurants[id].hours)}
                      </div>

                      <div className="restaurant-rating">
                        {Util.addZero(restaurants[id].rating)}
                      </div>

                      <div className="restaurant-reviewcount">
                        Reviews: {restaurants[id].review_count}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <PickupMap />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.entities.restaurants,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    fetchRestaurants: (category) => dispatch(fetchRestaurants(category)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Pickup);
