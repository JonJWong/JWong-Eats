import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import restaurantReducer from './restaurant_reducer';
import cartReducer from './cart_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantReducer,
  cart: cartReducer
})

export default entitiesReducer;