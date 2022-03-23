import React from "react";

function addZero(num) {
  if (num % 1 === 0) {
    return `${num}` + `.0`
  }
  return num
}

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
      <div className="delivery-container">
        <div className="delivery-categories">
          categories here
        </div>
        <div className="delivery-banner-ads">
          ads here
        </div>
        <div className="delivery-topbar">
          <div className="delivery-stores">All stores</div>
          <h1 className="delivery-top-picks">Top picks for you:</h1>
        </div>
        <div className="delivery-left">
          Filters go here
        </div>
        <div className="delivery-restaurant-list">
            {Object.keys(restaurants).map(id => {
              return (
                <div 
                  className="delivery-restaurant-container"
                  key={id}>
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
                        {addZero(restaurants[id].rating)}
                      </div>
                      <div className="delivery-restaurant-reviewcount">
                        Reviews: {restaurants[id].review_count}
                      </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    )
  }
}

export default Delivery;