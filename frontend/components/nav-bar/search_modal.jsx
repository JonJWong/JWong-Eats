import React from "react";

const RESTAURANT_NAMES = [
  "Sofia's Italian Restaurant",
   'SIGNATURZ SPORTS BAR',
   'Cafe Z',
   'The Red Cadillac',
   'Cozy Corner Deli and Caterers',
   'Chick Fil-A',
   "McDonald's",
   'The Halal Guys',
   'Subway',
   'Union Plaza Diner',
   'White Castle',
   'Red Lobster',
   'Popeyes Louisiana Kitchen',
   'IHOP',
   'Starbucks',
   'Panda Express',
   'TGI Fridays',
   'Chipotle Mexican Grill',
   'Olive Garden',
   'Bunny Cafe'
  ]

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
    if (this.props.searchOpen) {
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

    if (value !== "") {
      return (
        <div className="search-contents-wrapper">
          {results.map(restaurant => {
            return (
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
                  {restaurant.price_rating} • {restaurant.rating}<i className="fas fa-star">
                  </i> • {restaurant.review_count} Reviews
                </div>
              </div>
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