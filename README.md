## JWongEats
#

Welcome to JWongEats, an <a href="http://ubereats.com/" target="_blank" rel="noopener noreferrer">
UberEats</a> inspired Full-Stack single-page website, where you can browse and order from restaurants local to Union, New Jersey.

<a href="https://jwong-eats.herokuapp.com/#/splash" target="_blank" rel="noopener noreferrer">Live Link</a>


## Table of Contents
#

- [Features](features)
- [Technologies Used](technologies-used)
- [Future Plans](future-plans)


## Features


### Dynamic Searching
#

Users can search through available restaurants as shown:

<img src="https://media.giphy.com/media/SlK7350XmLG6LnUDHo/giphy.gif" alt="search-gif"></img>

Restaurants are fetched upon the site's initial load, and the searching is handled through JavaScript logic on the front-end. This saves time and computation, since there is no need for any AJAX requests or database queries.

```javaScript
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
```

This function iterates through the available restaurants, and saves the appropriate ones to a list. This list is then returned, and iterated through in another function to render the search results.

#
### Restaurant Filtering
#

The filtering of restaurants on the Delivery homepage is handled differently, to show another possibble approach.

Users can select icons on the top of the screen that reflect categories that the available restaurants fall into. This is then dynamically rendered onto the page by accessing the database through rails (When a button is pressed, an AJAX request is sent with a category parameter).

<img src="https://media.giphy.com/media/DmZpv2ljRn4ExgZeni/giphy.gif"></img>

```ruby
def index
  if (params[:category])
    @restaurants = Restaurant.where("description like ?", "%#{params[:category]}%")
    render :index
  else
    @restaurants = Restaurant.all
    render :index
  end
end
```

When this controller action hits, it will either send back a JSON object containing the filtered results, or all restaurants. This approach allows one thunk-action to handle multiple scenarios.

#
### Order History

Users can see their past orders, as well as a breakdown of prices and quantities through the receipt.

<img src="https://media.giphy.com/media/zLaOtiz8fI7OypGpVD/giphy.gif"></img>

When a user checks out a cart, and a transaction is processed, the current prices of items are saved as a transaction in the database, independent from what the current item's prices are. That way, if the items were ever to change prices in the future, the price change would not affect any orders retroactively, and the integrity of the transaction table would remain.



#
### Technologies used

- __Front End__: React.js, Redux

  - Supports front-end handling of cart, rendering of pages, and navigation.

  - Persists state to `localStorage` on crucial updates, such as adding/removing items from the cart.

- __Back End__: Ruby on Rails, with PostgreSQL database

  - Supports back-end server access, and acts as a middleware for the PostgreSQL database, manipulating the database where needed.
  
  - Handles User Authentication via session tokens which are then bootstrapped to the window and sent forward to the front-end.

- __Other__: Google Maps JavaScript API, Google Places API, Amazon AWS S3, JavaScript

  - Google Maps and Google Places were used to get accurate information about local restaurants, like name, address, review-count, rating, and pricing.
  
  - The Google Maps JavaScript API is also used to render the map with appropriate markers and infowindows on the Pickup page.
  
  - AWS S3 handles image hosting to allow for a more lightweight and modular implementation of the app. Images changed on the buckets will reflect on the site with no need to change the code.

- __Hosting__: JWongEats is hosted on heroku.

#
### Future Plans



#
### Credit

