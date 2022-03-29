import React from "react";
import { Link } from "react-router-dom";
import * as Util from "../../util/util";

const ALL_CATEGORIES = [
  "Dine In",
  "Take Out",
  "Fast Food",
  "Popular",
  "Healthy",
  "Italian",
  "Mexican",
  "Alcohol",
  "American",
  "Burger",
  "Fried Chicken",
  "Chinese",
  "default"
]

class Delivery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.renderList = this.renderList.bind(this);
    this.renderFilterMenu = this.renderFilterMenu.bind(this);
    this.ifImage = this.ifImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants()
      .then(action => this.setState({
        loading: false,
        restaurants: action.restaurants
      }));
    document.title = "Order Food Online | JWongEats"
  }

  ifImage(restaurant) {
    if (restaurant.photoUrl) {
      return (
        <img src={restaurant.photoUrl}
          id="delivery-restaurant-image"
          alt={`${restaurant.name} image`}/>
      )
    } else {
      return (
        <div className="image-filler"></div>
      )
    }
  }

  // methods for top category-bar
  filter(category) {
    const { fetchRestaurants } = this.props;
    const topBar = document.querySelector("#delivery-top-picks");

    if (category) {
      topBar.textContent = category;
    } else {
      topBar.textContent = "Top picks for you"
    }

    fetchRestaurants(category).then(action => {
      this.setState({
        restaurants: action.restaurants
      })
    })
  }

  renderFilterMenu() {
    return (
      <div id="delivery-categories">
        {ALL_CATEGORIES.map(category => {
          let filterName = category.split(" ").join("-")
          if (category === "default")  {
            return (
              <button
                className="delivery-filter-button"
                onClick={() => this.filter()}
                key={"default"}>
                  All Restaurants
              </button>
            )
          } else {
            return (
              <button
                className="delivery-filter-button"
                onClick={() => this.filter(filterName)}
                key={filterName}>
                  {category}
              </button>
            )
          }
        })}
      </div>
    )
  }

  sort(option) {

  }

  renderSorted(restaurants) {

  }

  renderList() {
    const { restaurants } = this.state;
    return (
      <div id="delivery-restaurant-list">
      {Object.keys(restaurants).map(id => {
        return (
          <Link
            key={id}
            to={`/restaurants/${id}`}>
              
            <div id="delivery-restaurant-container">
              {this.ifImage(restaurants[id])}

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
    )
  }

  render() {
    const { restaurants, loading } = this.state;

    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      )
    }

    return (
      <div id="delivery-container">

        {this.renderFilterMenu()}

        <div id="delivery-banner-ads">
          ads here
        </div>

        <div id="delivery-topbar">
          <div id="delivery-stores">All stores</div>
          <h1 id="delivery-top-picks">Top picks for you:</h1>
        </div>

        <div className="delivery-left"></div>

        {this.renderList()}
      </div>
    )
  }
}

export default Delivery;