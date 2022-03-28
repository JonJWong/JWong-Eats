import React from "react";
import { Link } from "react-router-dom"
import * as Util from "../../util/util";

class Delivery extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurants();
    document.title = "Order Food Online | JWongEats"
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div id="delivery-container">
        <div id="delivery-categories">
          categories here
        </div>

        <div id="delivery-banner-ads">
          ads here
        </div>

        <div id="delivery-topbar">
          <div id="delivery-stores">All stores</div>
          <h1 id="delivery-top-picks">Top picks for you:</h1>
        </div>

        <div id="delivery-left">
          Filters go here
        </div>

        <div id="delivery-restaurant-list">
            {Object.keys(restaurants).map(id => {
              return (
                <Link
                  key={id}
                  to={`/restaurants/${id}`}>
                    
                  <div id="delivery-restaurant-container">
                    {/* <img src={restaurants[id].photoUrl}
                      id="delivery-restaurant-image"
                      alt={`${restaurants[id].name} image`}/> */}

                    <div id="delivery-restaurant-bottom">

                      <h5 id="delivery-restaurant-name">
                        {restaurants[id].name}
                      </h5>

                      <div id="delivery-restaurant-price">
                        Price: {restaurants[id].price_rating}
                      </div>

                      <div id="delivery-restaurant-hours">
                        {Util.timeDifferencePrompt(restaurants[id].hours)}
                      </div>

                      <div id="delivery-restaurant-rating">
                        {Util.addZero(restaurants[id].rating)}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
      </div>
    )
  }
}

export default Delivery;