import React from "react";
import PickupMap from "./pickup_map";
import { Link } from "react-router-dom";
import * as Util from "../../util/util";

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
      <main className="pickup-container">
        <section>
          <h2>Pickup Nearby</h2>
          <ul>
            {Object.keys(restaurants).map((id) => {
              return (
                <li key={id}>
                  <Link to={`/restaurants/${id}`}>
                    <div className="restaurant-container" key={id}>
                      <img src={restaurants[id].photoUrl} />

                      <div className="restaurant-bottom">
                        <h5>{restaurants[id].name}</h5>

                        <p className="restaurant-price">
                          Price: {restaurants[id].price_rating}
                        </p>

                        <div className="restaurant-hours">
                          {Util.timeDifferencePrompt(restaurants[id].hours)}
                        </div>

                        <div className="restaurant-rating">
                          {restaurants[id].rating.toFixed(1)}
                        </div>

                        <div className="restaurant-reviewcount">
                          Reviews: {restaurants[id].review_count}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <PickupMap />
      </main>
    );
  }
}

export default Pickup;
