import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from "../actions/restaurant_actions";

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, { [action.restaurant.id]: action.restaurant })
    case RECEIVE_RESTAURANTS:
      return Object.assign({}, state, action.restaurants)
    default:
      return state
  }
}

export default restaurantReducer;