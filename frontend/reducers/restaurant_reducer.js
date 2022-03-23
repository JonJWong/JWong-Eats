import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from "../actions/restaurant_actions";

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  console.log(action)

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, { [action.restaurantId]: action.restaurant })
    case RECEIVE_RESTAURANTS:
      return Object.assign({}, state, action.restaurants)
    default:
      return state
  }
}

export default restaurantReducer;