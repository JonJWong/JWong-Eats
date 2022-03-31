import React from "react";
import { Link } from "react-router-dom";
import * as Util from "../../util/util";

import AdCarousel from "./ad_carousel";

// Constant with all categories as keys, their respective images as values.
const ALL_CATEGORIES = {
  "default": "https://jwong-eats-seeds.s3.amazonaws.com/top_eats.png",
  "Dine In": "https://jwong-eats-seeds.s3.amazonaws.com/caribbean.png",
  "Popular": "https://jwong-eats-seeds.s3.amazonaws.com/dessert.png",
  "Take Out": "https://jwong-eats-seeds.s3.amazonaws.com/grocery.png",
  "Fast Food": "https://jwong-eats-seeds.s3.amazonaws.com/fastfood.png",
  "Healthy": "https://jwong-eats-seeds.s3.amazonaws.com/deli.png",
  "American": "https://jwong-eats-seeds.s3.amazonaws.com/american.png",
  "Chinese": "https://jwong-eats-seeds.s3.amazonaws.com/asian.png",
  "Italian": "https://jwong-eats-seeds.s3.amazonaws.com/seafood.png",
  "Mexican": "https://jwong-eats-seeds.s3.amazonaws.com/caribbean.png",
  "Alcohol": "https://jwong-eats-seeds.s3.amazonaws.com/alcohol.png",
  "Burger": "https://jwong-eats-seeds.s3.amazonaws.com/burger.png",
  "Fried Chicken": "https://jwong-eats-seeds.s3.amazonaws.com/korean.png",
}

// Possible price filter/sort options.
const SORT_OPTIONS = [
  "$",
  "$$",
  "$$$$$",
]
// "None"

class Delivery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      priceRange: []
    }

    this.sort = this.sort.bind(this);
    this.renderSortButtons = this.renderSortButtons.bind(this);
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

  // Helper to conditionally render restaurant image containers, used
  // mostly during development, but might be useful in the future
  // if restaurants with no banner images are added.
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

  // Methods for top category-bar
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

  // Helper method to iterate through possible restaurant categories, and
  // render their icons with images attached.
  renderFilterMenu() {
    return (
      <div id="delivery-categories">
        {Object.keys(ALL_CATEGORIES).map(category => {
          let filterName = category.split(" ").join("-")
          if (category === "default")  {
            return (
              <button
                className="delivery-filter-button"
                onClick={() => this.filter()}
                key={"default"}>

                <div className="delivery-filter-icon-wrapper">
                  <img
                    src={ALL_CATEGORIES[category]}
                    className="delivery-filter-icon"
                    alt={`${category}-icon`} />
                </div>

                <div className="delivery-filter-text">
                  All Restaurants
                </div>
              </button>
            )
          } else {
            return (
              <button
                className="delivery-filter-button"
                onClick={() => this.filter(filterName)}
                key={filterName}>

                <div className="delivery-filter-icon-wrapper">
                  <img
                    src={ALL_CATEGORIES[category]}
                    className="delivery-filter-icon"
                    alt={`${category}-icon`} />
                </div>

                  <div className="delivery-filter-text">
                    {category}
                  </div>
              </button>
            )
          }
        })}
      </div>
    )
  }


  // Helper to filter through restaurants based on current sorting 
  sort(restaurants) {
    let options;
    if (this.state.priceRange.length > 0) {
      options = this.state.priceRange
    }

    const newRestaurants = {};
    
    Object.keys(restaurants).map(id => {
      let restaurant = restaurants[id];
      if (options?.includes(restaurant.price_rating)) {
        newRestaurants[id] = restaurant
      }
    })
    
    return newRestaurants;
  }


  // Helper to adjust class and set state for current sorting
  togglePriceRange(option, e) {
    e.currentTarget.classList.toggle('delivery-sort-button-selected');
    const newState = this.state;
    if (!newState.priceRange.some(ele => ele === option)
      && option !== "None") {
        newState.priceRange.push(option);
    } else if (option === "None") {
      newState.priceRange = [];
    } else {
      newState.priceRange = 
        newState.priceRange.filter(ele => ele !== option);
    }
    this.setState(newState);
  }

  // Helper to render the price buttons
  renderSortButtons() {
    return (
      <div id="delivery-left">
        <div id="delivery-sort-wrapper">
          <div className="delivery-left-header">
            Price Range
          </div>
          <div className="sort-button-wrapper">
            {SORT_OPTIONS.map(option => {
              if (option === "None") {
                return (
                  <button
                    key={option}
                    className="delivery-sort-button"
                    onClick={(e) => this.togglePriceRange(option, e)}>
                      <div className="sort-option-text">
                        None
                      </div>
                  </button>
                )
              } else {
                return (
                  <button
                  key={option}
                  className="delivery-sort-button"
                  onClick={(e) => this.togglePriceRange(option, e)}>
                    <div className="sort-option-text">
                      {option}
                    </div>
                  </button>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }


  // Render (sorted) restaurant list
  renderList() {
    let { restaurants } = this.state;

    if (this.state.priceRange.length > 0) {
      restaurants = this.sort(restaurants)
    }

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
    const { loading } = this.state;

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

        <AdCarousel restaurants={this.state.restaurants} />

        <div id="delivery-topbar">
          <div id="delivery-stores">All stores</div>
          <h1 id="delivery-top-picks">Top picks for you:</h1>
        </div>

        {this.renderSortButtons()}

        {this.renderList()}
      </div>
    )
  }
}

export default Delivery;