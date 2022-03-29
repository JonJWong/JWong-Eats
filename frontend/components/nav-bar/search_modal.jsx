import React from "react";
import { Link } from "react-router-dom";

class SearchModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }

    this.conditionalClose = this.conditionalClose.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.filterResults = this.filterResults.bind(this);
  }

  // setting local state to restaurants on mount, so it does not interfere with
  // other components
  componentDidMount() {
    this.props.fetchRestaurants()
      .then(action => this.setState({
        loading: false,
        restaurants: action.restaurants
      }))
  }

  // only allow closing of the search bar if it exists, to avoid null errors
  conditionalClose() {
    const wrapper = document.querySelector(".search-contents-wrapper");
    if (wrapper) {
      wrapper.classList.remove("drop");
      setTimeout(() => {
        this.props.closeSearchModal();
      }, 500)
    } else {
      this.props.closeSearchModal();
    }
  }

  // compare searchbar contents to restaurant names
  filterResults(value) {
    const { restaurants } = this.state;
    const filtered = [];

    Object.keys(restaurants).forEach(id => {
      const restaurant = restaurants[id];
      if (restaurant.name.toLowerCase().includes(value)) {
        filtered.push(restaurant);
      }
    })

    return filtered;
  }

  // display the results that return from the search filter
  renderResults(value) {
    const results = this.filterResults(value);

    // add transition for height
    setTimeout(() => {
      const wrapper = document.querySelector(".search-contents-wrapper");
      if (wrapper) {
        document.querySelector(".search-contents-wrapper").classList.add("drop");
      }
    }, 300)

    // check if searchbar is empty, if it is not empty, render list
    if (value !== "") {
      return (
        <div className="search-contents-wrapper">
          {results.map(restaurant => {
            return (
              <Link
                to={`/restaurants/${restaurant.id}`}
                key={restaurant.name+value}>
                <div
                  className="search-result-container">
                  <div className="search-result-photo-container">
                    <img
                      src={restaurant.photoUrl} 
                      className="search-result-photo"
                      alt={`${restaurant.name}-search-photo`} />
                  </div>
                  <div className="search-result-title">
                    {restaurant.name} - <span>{restaurant.address}</span>
                  </div>
                  <div className="search-result-subtitle">
                    {restaurant.price_rating} • {restaurant.rating} <i className="fas fa-star fa-sm">
                    </i> • {restaurant.review_count} Reviews
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  render() {
    
    if (this.state.loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      )
    }

    return (
      <div
        className="search-result-wrapper"
        onClick={() => this.conditionalClose()}>
          {this.renderResults(this.props.value)}
      </div>
    )
  }
}

export default SearchModal;