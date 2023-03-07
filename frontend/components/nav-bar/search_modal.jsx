import React from "react";
import { Link } from "react-router-dom";

class SearchModal extends React.Component {
  constructor(props) {
    super(props);

    this.conditionalClose = this.conditionalClose.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.filterResults = this.filterResults.bind(this);
  }

  // Only allow closing of the search bar if it exists, to avoid null errors
  conditionalClose() {
    const wrapper = document.querySelector(".search-contents");
    if (wrapper) {
      wrapper.classList.remove("drop");
      setTimeout(() => {
        this.props.closeSearchModal();
      }, 500);
    } else {
      this.props.closeSearchModal();
    }
  }

  // Compare searchbar contents to restaurant names
  filterResults(value) {
    const { restaurants } = this.props;
    const filtered = [];

    Object.keys(restaurants).forEach((id) => {
      const restaurant = restaurants[id];
      if (restaurant.name.toLowerCase().includes(value)) {
        filtered.push(restaurant);
      }
    });

    return filtered;
  }

  // Display the results that return from the search filter
  renderResults(value) {
    const results = this.filterResults(value);

    // Add transition for height
    setTimeout(() => {
      const wrapper = document.querySelector(".search-contents");
      if (wrapper) {
        document.querySelector(".search-contents").classList.add("drop");
      }
    }, 10);

    // Check if searchbar is empty, if it is not empty, render list
    if (value !== "") {
      return (
        <ul className="search-contents">
          {results.map((restaurant) => {
            return (
              <li>
                <Link
                  to={`/restaurants/${restaurant.id}`}
                  key={restaurant.name + value}
                >
                  <div className="search-result">
                    <img
                      src={restaurant.photoUrl}
                      alt={`${restaurant.name}-search-photo`}
                    />
                    <h3>
                      {restaurant.name} - {restaurant.address}
                    </h3>
                    <p>
                      {restaurant.price_rating} • {restaurant.rating}{" "}
                      <i className="fas fa-star fa-sm"></i> •{" "}
                      {restaurant.review_count} Reviews
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <section
        className="search-result-wrapper"
        onClick={() => this.conditionalClose()}
      >
        {this.renderResults(this.props.value)}
      </section>
    );
  }
}

export default SearchModal;
