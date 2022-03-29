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

  componentDidMount() {
    this.props.fetchRestaurants()
      .then(() => this.setState({ loading: false }))
  }

  conditionalClose() {
    const wrapper = document.querySelector(".search-contents-wrapper")
    if (wrapper) {
      wrapper.classList.remove("drop")
      setTimeout(() => {
        this.props.closeSearchModal();
      }, 500)
    } else {
      this.props.closeSearchModal();
    }
  }

  filterResults(value) {
    const { restaurants } = this.props;
    const filtered = [];

    Object.keys(restaurants).forEach(id => {
      const restaurant = restaurants[id];
      if (restaurant.name.toLowerCase().includes(value)) {
        filtered.push(restaurant);
      }
    })

    return filtered;
  }

  renderResults(value) {
    const results = this.filterResults(value);
    setTimeout(() => {
      document.querySelector(".search-contents-wrapper").classList.add("drop")  

    }, 300)
    if (value !== "") {
      return (
        <div className="search-contents-wrapper">
          {results.map(restaurant => {
            return (
              <Link to={`/restaurants/${restaurant.id}`}>
                <div
                  className="search-result-container"
                  key={restaurant.name+value}>
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
    const { loading } = this.state;
    if (loading) {
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