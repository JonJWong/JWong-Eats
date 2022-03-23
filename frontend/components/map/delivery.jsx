import React from "react";

class Delivery extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants } = this.props;

    return (
      <span className="delivery-container">
        <div className="delivery-categories">
        categories here
        </div>
        <div className="delivery-banner-ads">
        ads here
        </div>
        <span className="delivery-title">All stores</span>
          <div className="delivery-restaurant-list">
              {Object.keys(restaurants).map(id => {
                return (
                  <div 
                    className="delivery-restaurant-container"
                    key={id}
                    onClick={() => fetchRestaurant(id)}>
                      <div className="delivery-restaurant-image"></div>
                      <div className="delivery-restaurant-bottom">
                        <h5 className="delivery-restaurant-name">
                          {restaurants[id].name}
                        </h5>
                        <div className="delivery-restaurant-price">
                          Price: {restaurants[id].price_rating}
                        </div>
                        <div className="delivery-restaurant-hours">
                          Hours: {restaurants[id].hours}
                        </div>
                        <div className="delivery-restaurant-rating">
                          {restaurants[id].rating}
                        </div>
                        <div className="delivery-restaurant-reviewcount">
                          Reviews: {restaurants[id].review_count}
                        </div>
                      </div>
                  </div>
                )
              })}
            </div>
      </span>
    )
  }
}

export default Delivery;