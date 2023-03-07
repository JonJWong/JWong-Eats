import React from "react";
import { Link } from "react-router-dom";
import * as Util from "../../util/util";

import AdCarousel from "./ad_carousel";

// Constant with all categories as keys, their respective images as values.
const ALL_CATEGORIES = {
  default: "https://jwong-eats-seeds.s3.amazonaws.com/top_eats.png",
  "Dine In": "https://jwong-eats-seeds.s3.amazonaws.com/caribbean.png",
  Popular: "https://jwong-eats-seeds.s3.amazonaws.com/dessert.png",
  "Take Out": "https://jwong-eats-seeds.s3.amazonaws.com/grocery.png",
  "Fast Food": "https://jwong-eats-seeds.s3.amazonaws.com/fastfood.png",
  Healthy: "https://jwong-eats-seeds.s3.amazonaws.com/deli.png",
  American: "https://jwong-eats-seeds.s3.amazonaws.com/american.png",
  Chinese: "https://jwong-eats-seeds.s3.amazonaws.com/asian.png",
  Italian: "https://jwong-eats-seeds.s3.amazonaws.com/seafood.png",
  Mexican: "https://jwong-eats-seeds.s3.amazonaws.com/caribbean.png",
  Alcohol: "https://jwong-eats-seeds.s3.amazonaws.com/alcohol.png",
  Burger: "https://jwong-eats-seeds.s3.amazonaws.com/burger.png",
  "Fried Chicken": "https://jwong-eats-seeds.s3.amazonaws.com/korean.png",
};

// Possible price filter/sort options.
const SORT_OPTIONS = ["$", "$$", "$$$$$"];
// "None"

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      priceRange: [],
    };

    this.sort = this.sort.bind(this);
    this.renderSortButtons = this.renderSortButtons.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderFilterMenu = this.renderFilterMenu.bind(this);
    this.ifImage = this.ifImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants().then((action) =>
      this.setState({
        loading: false,
        restaurants: action.restaurants,
      })
    );
    document.title = "Order Food Online | JWongEats";
  }

  // Helper to conditionally render restaurant image containers, used
  // mostly during development, but might be useful in the future
  // if restaurants with no banner images are added.
  ifImage(restaurant) {
    if (restaurant.photoUrl) {
      return <img src={restaurant.photoUrl} alt={`${restaurant.name} image`} />;
    } else {
      return <div className="image-filler"></div>;
    }
  }

  // Methods for top category-bar
  filter(category) {
    const { fetchRestaurants } = this.props;
    const topBar = document.querySelector(".top-picks");

    if (category) {
      topBar.textContent = category;
    } else {
      topBar.textContent = "Top picks for you";
    }

    fetchRestaurants(category).then((action) => {
      this.setState({
        restaurants: action.restaurants,
      });
    });
  }

  // Helper method to iterate through possible restaurant categories, and
  // render their icons with images attached.
  renderFilterMenu() {
    return (
      <ul className="delivery-categories">
        {Object.keys(ALL_CATEGORIES).map((category) => {
          let filterName = category.split(" ").join("-");
          if (category === "default") {
            return (
              <li onClick={() => this.filter()} key={"default"}>
                <div>
                  <img
                    src={ALL_CATEGORIES[category]}
                    alt={`${category}-icon`}
                  />
                </div>

                <p>All Restaurants</p>
              </li>
            );
          } else {
            return (
              <li onClick={() => this.filter(filterName)} key={filterName}>
                <div>
                  <img
                    src={ALL_CATEGORIES[category]}
                    alt={`${category}-icon`}
                  />
                </div>

                <p>{category}</p>
              </li>
            );
          }
        })}
      </ul>
    );
  }

  // Helper to filter through restaurants based on current sorting
  sort(restaurants) {
    let options;
    if (this.state.priceRange.length > 0) {
      options = this.state.priceRange;
    }

    const newRestaurants = {};

    Object.keys(restaurants).map((id) => {
      let restaurant = restaurants[id];
      if (options?.includes(restaurant.price_rating)) {
        newRestaurants[id] = restaurant;
      }
    });

    return newRestaurants;
  }

  // Helper to adjust class and set state for current sorting
  togglePriceRange(option, e) {
    e.currentTarget.classList.toggle("sort-button-selected");
    const newState = this.state;
    if (
      !newState.priceRange.some((ele) => ele === option) &&
      option !== "None"
    ) {
      newState.priceRange.push(option);
    } else if (option === "None") {
      newState.priceRange = [];
    } else {
      newState.priceRange = newState.priceRange.filter((ele) => ele !== option);
    }
    this.setState(newState);
  }

  // Helper to render the price buttons
  renderSortButtons() {
    return (
      <aside className="left-sort">
        <section className="sticky">
          <h2>Price Range</h2>
          <div className="sort-button-wrapper">
            {SORT_OPTIONS.map((option) => {
              if (option === "None") {
                return (
                  <button
                    key={option}
                    onClick={(e) => this.togglePriceRange(option, e)}
                  >
                    <div className="sort-option-text">None</div>
                  </button>
                );
              } else {
                return (
                  <button
                    key={option}
                    onClick={(e) => this.togglePriceRange(option, e)}
                  >
                    <div className="sort-option-text">{option}</div>
                  </button>
                );
              }
            })}
          </div>
        </section>
      </aside>
    );
  }

  // Render (sorted) restaurant list
  renderList() {
    let { restaurants } = this.state;

    if (this.state.priceRange.length > 0) {
      restaurants = this.sort(restaurants);
    }

    return (
      <section className="delivery-restaurant-list">
        {Object.keys(restaurants).map((id) => {
          return (
            <Link key={id} to={`/restaurants/${id}`}>
              <div>
                {this.ifImage(restaurants[id])}

                <div className="deliv-bottom">
                  <h5>{restaurants[id].name}</h5>

                  <div className="deliv-price">
                    Price: {restaurants[id].price_rating}
                  </div>

                  <div className="deliv-hours">
                    {Util.timeDifferencePrompt(restaurants[id].hours)}
                  </div>

                  <div className="deliv-rating">
                    {restaurants[id].rating.toFixed(1)}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    );
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      );
    }

    return (
      <main className="delivery-container">
        {this.renderFilterMenu()}

        <AdCarousel restaurants={this.state.restaurants} />

        <header>
          <h1>All stores</h1>
          <h2 className="top-picks">Top picks for you</h2>
        </header>

        {this.renderSortButtons()}

        {this.renderList()}
      </main>
    );
  }
}

export default Delivery;
