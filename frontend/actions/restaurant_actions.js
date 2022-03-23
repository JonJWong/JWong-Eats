import * as RestaurantAPIUtil from "../util/restaurant_api_util";

// action constants
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

// action creators
const receiveRestaurants = (restaurants) => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants
  }
}

const receiveRestaurant = (restaurantId) => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurantId
  }
}

// thunk action creators
export const fetchRestaurants = () => (dispatch) => {
  return RestaurantAPIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
}

export const fetchRestaurant = (restaurantId) => (dispatch) => {
  return RestaurantAPIUtil.fetchRestaurant(restaurantId)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
}